import { assert } from "chai";
import "mocha";
import ConsoleLogger from "../../src/index";
import stdout from "test-console";

describe("Testing ConsoleLogger()", function () {
  it("should call console INFO", function () {
    const infoOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().info("info test");
    });

    ConsoleLogger().info("info test");

    assert.isNotNull(infoOutput);
  });

  it("should call console DEBUG", function () {
    const debugOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().debug("debug test");
    });

    ConsoleLogger().debug("debug test");

    assert.isNotNull(debugOutput);
  });

  it("should call console ERROR", function () {
    const errorOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().error("error test");
    });

    ConsoleLogger().error("error test");

    assert.isNotNull(errorOutput);
  });

  it("should call console WARN", function () {
    const warnOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().warn("warn test");
    });

    ConsoleLogger().warn("warn test");

    assert.isNotNull(warnOutput);
  });

  it("should call console INFO with args", function () {
    const infoOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().info("info test", "test args");
    });

    assert.isNotNull(infoOutput);
  });

  it("should call console DEBUG with args", function () {
    const debugOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().debug("debug test", "test args");
    });

    assert.isNotNull(debugOutput);
  });

  it("should call console WARN with args", function () {
    const infoOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().warn("warn test", "test args");
    });

    assert.isNotNull(infoOutput);
  });

  it("should call console ERROR with args", function () {
    const errorOutput = stdout.stdout.inspectSync(() => {
      ConsoleLogger().error("error test", "test args");
    });

    assert.isNotNull(errorOutput);
  });
});
