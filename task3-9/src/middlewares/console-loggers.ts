import { getRequestInfo } from '../utils';

export const requestsConsoleLogger = (req, _, next): void => {
  console.log(getRequestInfo(req));
  next();
};

export const consoleErrorLogger = (err): void => {
  console.error(JSON.stringify(err, null, 2));
};
