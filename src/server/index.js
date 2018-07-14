var port = process.env.PORT || 3000;
var express = require('express');
var path = require('path');
var Axios = require('axios');
const ACCUWEATHER_KEY = process.env.ACCUWEATHER_KEY;
var AWS = require('aws-sdk');
var accessKeyId = require('./config.js').keys.accessKeyId;
var secretAccessKeyId = require('./config.js').keys.secretAccessKeyId;
var multer = require('multer');
var multerS3 = require('multer-s3');
const CLOSET_AI_BUCKET = 'closet.test'
const S3_API_VER = '2006-03-01';
var app = express();

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


app.use(express.static(__dirname + '../../../dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '../../../dist/index.html'));
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
