import winston from 'winston';
import config from 'config';

let log;

export const create = () => {
  log = new winston.Logger({
    level: config.LOG_LEVEL,
    transports: [
      new winston.transports.Console({
        colorize: true,
        timestamp: true,
      }),
    ],
  });
};

export const logger = () => log;
