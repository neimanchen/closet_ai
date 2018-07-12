var port = process.env.PORT || 3000;
var express = require('express');
var path = require('path');
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

app.use(express.static(__dirname + '../../../dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '../../../dist/index.html'));
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
