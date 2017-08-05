'use strict';
var mongoose = require('mongoose'),
  Sensor = mongoose.model('sensor');

exports.listSensors = function(req, res) {
  Sensor.find({}, function( err, sensor) {
    if (err)
      res.send(err);
    res.json(sensor)
  });
};

exports.createSensor = function(req, res) {
  var newSensor = new Sensor(req.body);
  newSensor.save(function(err, sensor) {
    if (err)
      res.send(err)
    res.json(sensor);
  });
};

exports.getSensor = function(req, res) {
  Sensor.findById(req.params.sensorId, function(err, sensor) {
    if(err)
      res.send(err);
    res.json(sensor);
  });
};

exports.updateSensor = function(req, res) {
  Sensor.findOneAndUpdate({_id: req.params.sensorId}, req.body, {new: true},
  function(err, sensor) {
    if(err)
      res.send(err);
    res.json(sensor);
  });
};

exports.deleteSensor = function(req, res) {
  Sensor.remove({_id: req.params.sensorId}, function(err, sensor) {
    if (err)
      res.send(err);
    res.json({ message: 'Removed sensor: ' + req.params.sensorId });
  });
};

