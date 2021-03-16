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

  const logInformation = log(new Date().toISOString())("INFO");
  const logError = log(new Date().toISOString())("ERROR");

  logInformation("Example 3.1: This is an informational message!");
  logError("Example 3.2: An exception occurred!");

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
    if (!datetime) datetime = new Date().toISOString();
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  let curriedLog = curry(log);

  // We can call log with all 3 arguments:
  curriedLog(
    new Date().toISOString(),
    "INFO",
    "Example 4.1: This is an informational message"
  );

  // We can pass all arguments separately:
  curriedLog(new Date().toISOString())("INFO")(
    "Example 4.2: This is an informational message"
  );

  // And we can apply partial application:
  const logInformation = curriedLog(null)("INFO");
  logInformation("Example 4.3: This is an informational message");

  setTimeout(function () {
    logInformation("Example 4.4: 1 second later...");
  }, 2000);

  // etc. etc.
}

// Uncomment to run Example 4:
example4();
