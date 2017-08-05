'use strict';
var mongoose = require('mongoose'),
  SensorData = mongoose.model('sensorData');

exports.listAllSensorData = function(req, res) {
  SensorData.find({}, function(err, data) {
    if(err)
      res.send(err);
    res.json(data);
  });
};

exports.getLiveData = function(req, res) {
  var sys = require('util'),
    exec = require('child_process').exec,
    child;

  child = exec('python ./python/getEnv.py',
  function (err, stdout, stderr) {
    //if (err !== null)
    //  res.send(err);
    var strData = stdout.replace(/'/g,"\"");
    res.json(JSON.parse(strData));
  });
  //res.json({ message: 'working on it...' });
};

exports.listSensorData = function(req, res) {
  SensorData.find({hostname: req.params.sensorId}).
  limit(10).
  sort('-envdate').
  exec(
    function(err, data) {
      if(err)
        res.send(err);
      res.json(data);
  });
};
