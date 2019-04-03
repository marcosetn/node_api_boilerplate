const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = 3000;
const mongoose = require('mongoose');

const dbMonitor = mongoose.connection;
dbMonitor.on('error', () => {
  console.log('MONGO CONNECTION ERROR - SHUTTING DOWN!');
  process.exit();
});
dbMonitor.on('open', console.log.bind(console, 'MONGOOSE CONNECTED'));

mongoose.Promise = global.Promise;
console.log('env', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'test') mongoose.connect('mongodb://localhost/Tododb_TEST', { useNewUrlParser: true });
else mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
Template = require('./api/models/templateModel');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/templateRoutes');

routes(app);


module.exports = app.listen(port);
console.log(`listening on ${port}`);
