'use strict';
module.exports = function(app) {
  var sensor = require('../controllers/sensorController');
  var sensorData = require('../controllers/sensorDataController');

  // sensor routes
  app.route('/sensor')
    .get(sensor.listSensors)
    .post(sensor.createSensor);

  app.route('/sensor/:sensorId')
    .get(sensor.getSensor)
    .put(sensor.updateSensor)
    .delete(sensor.deleteSensor);

  // live data
  app.route('/livedata/:sensorId')
    .get(sensorData.getLiveData);

  // sensor data routes
  app.route('/sensordata')
    .get(sensorData.listAllSensorData);

  app.route('/sensordata/:sensorId')
    .get(sensorData.listSensorData);
};

