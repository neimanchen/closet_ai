var port = process.env.PORT || 3000;
var express = require('express');
var path = require('path');
var Axios = require('axios');
const ACCUWEATHER_KEY = process.env.ACCUWEATHER_KEY;
var AWS = require('aws-sdk');
var accessKeyId = require('./config.js').keys.accessKeyId;
var secretAccessKeyId = require('./config.js').keys.secretAccessKeyId;
var barcodableKey = require('./config.js').keys.barcodable;
var multer = require('multer');
var multerS3 = require('multer-s3');
const CLOSET_AI_BUCKET = 'closet.test'
const S3_API_VER = '2006-03-01';
var db = require('../database');

var app = express();

app.use((res, req, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Controll-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Controll-Allow-Headers', 'Content-Type');
  next();
})

var s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  secretAccessKeyId: secretAccessKeyId,
  Bucket: CLOSET_AI_BUCKET,
  apiVersion: S3_API_VER
});

// e.g. http://localhost:3000/api/locationkey?lat=30.37&lon=-97.76
app.get('/api/locationkey', (req, res) => {
  var lat = req.query.lat;
  if (lat === undefined) {
    return res.status(400).send({ error: 'missing property lat' });
  }
  var lon = req.query.lon;
  if (lon === undefined) {
    return res.status(400).send({ error: 'missing property lon' });
  }
  lat = Number(lat);
  if (isNaN(lat) || lat < -90 || lat > 90) {
    return res.status(400).send({ error: 'lat must be a valid number between -90.0 and 90.0' });
  }
  lon = Number(lon);
  if (isNaN(lon) || lon < -180 || lon > 180) {
    return res.status(400).send({ error: 'lon must be a valid number between -180.0 and 180.0' });
  }
  var coordinates = lat + '%2C' + lon;
  Axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?' +
    `apikey=${ACCUWEATHER_KEY}&q=${coordinates}`).then(function (response) {
      if (response.data === null || response.data.Key === undefined || response.data.Key === null) {
        return res.status(500).send({error: 'AccuWeather could not find the weather for your location'});
      }
      sendWeather(response.data.Key, res);
    }).catch(function (error) {
      res.status(500).send({error: 'There was an error getting your location from AccuWeather'});
      console.error(error);
    });
});

function sendWeather(locationKey, res) {
  Axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?` +
    `apikey=${ACCUWEATHER_KEY}`).then(function (respsonse) {
      res.send(respsonse.data);
    }).catch(function (error) {
      res.status(500).send({error: 'There was an error getting your weather from AccuWeather'});
      console.error(error);
    });
}

app.get('/api/barcode', (req, res) => {
  var config = {
    headers: {
      Authorization: barcodableKey
    }
  }
  Axios.get('https://www.barcodable.com/api/v1/upc/826218178634', config)
  .then((response) => {
    res.send(response);
  }).catch((error) => {
    res.status(500).send({error: 'There was an error getting your info from Barcodable'});
  });
})

app.use(express.static(__dirname + '../../../dist'));

app.get('/filltestdata', (req, res) => {
  db.createDummyData();
  res.status(200).end('Created Data')
});

app.get('/cleartables', (req, res) => {
  db.clearTables();
  res.status(200).end('Tables clear, but still exist')
});

app.get('/dropdb', (req, res) => {
  db.dropTables();
  res.status(200).end('Tables deleted, restart server to recreate')
});

app.get('/createdb', (req, res) => {
  db.createDB();
  res.status(200).end('Tables created')
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '../../../dist/index.html'));
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
