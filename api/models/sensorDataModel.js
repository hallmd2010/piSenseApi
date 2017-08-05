'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sensorDataSchema = new Schema({
  hostname: {
    type: String,
    Required: 'Enter a hostname'
  },
  envdate: {
    type: Date,
    default: Date.now
  },
  temp : {
    type: Number,
    Required: 'Enter a temperature'
  },
  light: {
    type: Number,
    Required: 'Enter a light reading'
  },
  pressure: {
    type: Number,
    Required: 'Enter a pressure reading'
  }
}, { collection: 'sensorData' });

module.exports = mongoose.model('sensorData', sensorDataSchema);
