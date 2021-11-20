import chalk from "chalk";

/**
 * gets background color
 * @param level
 */
export function getBGColorByLevel(level: string) {
  if (level === "warn") return chalk.black.bgYellowBright;

  if (level === "info") return chalk.white.bgHex("#1b6b00");

  if (level === "debug") return chalk.black.bgHex("#FFA500");

  if (level === "error") return chalk.black.bgRed;

  return chalk.bold.green;
}
