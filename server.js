var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Sensor = require('./api/models/sensorModel'),
  SensorData = require('./api/models/sensorDataModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pisensors',{ useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/piSenseRoutes');
routes(app);

app.listen(port);

console.log('Listening on port: ' + port);

