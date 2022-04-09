const app = require('./app');

/**
 * File to load configurations
 *
 */

// const app = express();
// const PORT = process.env.PORT || 4000;

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `\x1b[32mvc-user-service\x1b[0m running at \x1b[4m\x1b[33mhttp://localhost:${PORT}\x1b[0m`,
    'info',
    'server.js'
  );
});
process.on('unhandledRejection', (reason, p) => {
  console.log(
    `'Unhandled Rejection at: Promise', ${p}, 'reason:', ${reason}`,
    'error',
    'server.js'
  );
  // application specific logging, throwing an error, or other logic here
});

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
