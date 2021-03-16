// Example 1: Introducing the log function
function example1() {
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  log(
    new Date().toISOString(),
    "INFO",
    "Example 1.1: This is an informational message"
  );

  log(new Date().toISOString(), "ERROR", "Example 1.2: An exception occurred");

  // Log 1 second later to check the timestamp is different:
  setTimeout(function () {
    log(new Date().toISOString(), "INFO", "Example 1.3: 1 second later...");
  }, 1000);
}

// Uncomment to run Example 1:
// example1();

// Example 2: Introducing an abstraction
function example2() {
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  const logInformation = (message) =>
    log(new Date().toISOString(), "INFO", message);
  const logError = (message) => log(new Date().toISOString(), "ERROR", message);

  logInformation("Example 2.1: This is an informational message");
  logError("Example 2.2: An exception occurred!");

  // Log 1 second later to check the timestamp is different:
  setTimeout(function () {
    logInformation("Example 2.3: 1 second later...");
  }, 1000);
}

// Uncomment to run Example 2:
// example2();

// Example 3: Currying
function example3() {
  function log(datetime) {
    return function (severity) {
      return function (message) {
        console.log(`${datetime} [${severity}] - ${message}`);
      };
    };
  }

  // Curried log function with arrow functions:
  // const log = (datetime) => (severity) => (message) =>
  //   console.log(`${datetime} [${severity}] - ${message}`);

  var timestamp = {
    toString: () => new Date().toISOString()
  };

  const logInformation = log(timestamp)("INFO");
  const logError = log(timestamp)("ERROR");

  logInformation("Example 3.1: This is an informational message!");
  logError("Example 3.2: An exception occurred!");

  // Log 1 second later to check the timestamp is different:
  setTimeout(function () {
    logInformation("Example 3.3: 1 second later...");
  }, 1000);
}

// Uncomment to run Example 3:
//example3();

function example4() {
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) return fn(...args);
      return function (a) {
        return curried(...[...args, a]);
      };
    };
  }

  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  var timestamp = {
    toString: () => new Date().toISOString()
  };

  let curriedLog = curry(log);

  // We can call log with all 3 arguments:
  curriedLog(
    timestamp,
    "INFO",
    "Example 4.1: This is an informational message"
  );

  // We can pass all arguments separately:
  curriedLog(timestamp)("INFO")(
    "Example 4.2: This is an informational message"
  );

  // And we can apply partial application:
  const logInformation = curriedLog(timestamp)("INFO");
  logInformation("Example 4.3: This is an informational message");

  // Log 1 second later to check the timestamp is different:
  setTimeout(function () {
    logInformation("Example 4.4: 1 second later...");
  }, 1000);

  // etc. etc.
}

// Uncomment to run Example 4:
example4();
