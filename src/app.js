const express = require('express');
const api = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const { status302 } = require('./constants/httpStatus');
const validateAPIKey = require('./middleware/apiAuth');
require('dotenv').config();

const app = express();
module.exports = app;

app.disable('x-powered-by'); // Do not show server details
app.use(cors());
// bodyParser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//should come from a config
const ignorecert = true;
if (ignorecert) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; //Used to to ignore any certificate error
}

const enabledoc = true;
if (enabledoc) {
  const swagggerDoc = require('./swagger.json');
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagggerDoc));
  app.use('/$', (req, res) => {
    res.redirect(status302, '/docs');
  });
}

// Initialize SQL Connection
// const { sqlPoolPromise } = require("./controllers/sql/connect");
// (async () => sqlPoolPromise())();

// Initialize mongo connection
const dbPwd = 'GiGX9LNFOLRdo7RE';
const connString = `mongodb+srv://dbUser:${dbPwd}@vichevskawebportal.ifurg.mongodb.net/vichevska-portal`;

// mongoose connection
mongoose.Promise = global.Promise; // wait for results
mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(
  validateAPIKey(
    process.env.apisharedkey_header,
    process.env.apisharedkey_value
  )
);

app.use('/api', api);

// Serving static files
app.use(express.static('public'));
