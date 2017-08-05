'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sensorSchema = new Schema({
  ip: {
    type: String,
    Required: 'Enter IP address for _id'
  },
  hostname: {
    type: String,
    Required: 'Enter a hostname'
  },
  apiPort: {
    type: Number,
    default: 3000
  },
  location: {
    type: String,
    Required: 'Enter a location for the sensor'
  },
  model: {
    type: String,
    default: ''
  }
},{ collection: 'sensor' });

module.exports = mongoose.model('sensor', sensorSchema);

