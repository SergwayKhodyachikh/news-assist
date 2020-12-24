const winston = require('winston');
const path = require('path');
const morgan = require('morgan');

module.exports = app => {
  const {
    combine,
    timestamp,
    prettyPrint,
    colorize,
    align,
    printf
  } = winston.format;

  // Adding new loggers with winston
  winston.add(
    winston.createLogger({
      transports: [
        // File logger
        new winston.transports.File({
          filename: path.resolve('..', 'server-log.txt'),
          format: combine(timestamp(), prettyPrint()),
          level: 'error'
        }),
        // Console logger
        new winston.transports.Console({
          handleExceptions: true,
          format: combine(
            colorize(),
            timestamp(),
            align(),
            printf(info => {
              const { timestamp, level, message, ...args } = info;
              const ts = timestamp.slice(0, 19).replace('T', ' ');
              return `${ts} [${level}]: ${message} ${
                Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
              }`;
            })
          )
        })
      ]
    })
  );

  process.on('unhandledRejection', ex => {
    throw ex;
  });

  if (app.get('env') === 'development')
    winston.info('Morgan enabled') && app.use(morgan('dev'));
};
