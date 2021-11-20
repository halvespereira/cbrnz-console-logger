const moment = require("moment");

/**
 * Basic Logger - all messages are written to the console
 * Level is taken from MoleculerJS config variable LOGLEVEL
 * Levels available: info, debug, warn, error
 */
export default function ConsoleLogger() {
  /**
   * Base logging function
   *
   * @param level
   * @param message
   * @param args
   */
  function log(level: string, message: string, args?: any) {
    const consoleLogger: any = console;
    const currentDateTime = moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const timestamp: string = `[${currentDateTime.format()}] `;
    if (consoleLogger && consoleLogger[level]) {
      if (args !== undefined) {
        consoleLogger[level](timestamp + message, args);
      } else {
        consoleLogger[level](timestamp + message);
      }
    }
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function info(message: string, args?: any) {
    log("info", "INFO::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function debug(message: string, args?: any) {
    log("debug", "DEBUG::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function warn(message: string, args?: any) {
    log("warn", "WARN::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function error(message: string, args?: any) {
    log("error", "ERROR::" + message, args);
  }

  return {
    info,
    debug,
    warn,
    error,
  };
}
