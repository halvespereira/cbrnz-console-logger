const moment = require("moment-timezone");
import { getBGColorByLevel } from "./utils/utils";

/**
 * Basic Logger - all messages are written to the console
 * Levels available: info, debug, warn, error
 */
function ConsoleLogger() {
  /**
   * Base logging function
   *
   * @param level
   * @param message
   * @param args
   */

  function log(level: string, message: string, args?: any) {
    const cbrnzConsoleLogger: any = console;
    const currentDateTime = moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const timestamp: string = `[${currentDateTime.format("dddd, MMMM Do YYYY, h:mm:ss a z")}] `;

    if (args !== undefined) {
      cbrnzConsoleLogger[level](timestamp + message, args);
    } else {
      cbrnzConsoleLogger[level](timestamp + message);
    }
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function info(message: string, args?: any) {
    log("info", getBGColorByLevel("info")(" INFO ") + "::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function debug(message: string, args?: any) {
    log("debug", getBGColorByLevel("debug")(" DEBUG ") + "::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function warn(message: string, args?: any) {
    log("warn", getBGColorByLevel("warn")(" WARN ") + "::" + message, args);
  }

  /**
   * @param message
   * @param args optional arguments array
   */
  function error(message: string, args?: any) {
    log("error", getBGColorByLevel("error")(" ERROR ") + "::" + message, args);
  }

  return {
    info,
    debug,
    warn,
    error,
  };
}

export default ConsoleLogger;
