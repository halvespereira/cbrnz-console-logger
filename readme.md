# CBRNZ-CONSOLE-LOGGER

_Simple console logger with helpful colors and timestamp_

## Installation

`npm install cbrnz-console-logger`

## Usage

Use `ConsoleLogger` wherever you want to write to the console.

```js
import ConsoleLogger from "cbrnz-console-logger";
//or
const ConsoleLogger = require("cbrnz-console-logger");

ConsoleLogger().info("type log here");
ConsoleLogger().info("type message here", "args here");

ConsoleLogger().warn("type log here");
ConsoleLogger().warn("type message here", "args here");

ConsoleLogger().debug("type log here");
ConsoleLogger().debug("type message here", "args here");

ConsoleLogger().error("type log here");
ConsoleLogger().error("type message here", "args here");
```

## License

cbrnz-console-logger is released under [the ISC license](LICENSE).
