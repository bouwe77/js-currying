// Example 1: Introducing the log function
function example1() {
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  const datetime = new Date();
  log(datetime, "INFO", "This is an informational message");
  log(datetime, "ERROR", "An exception occurred");
}

// Uncomment to run Example 1:
// example1()

// Example 2: Introducing an abstraction
function example2() {
  function log(datetime, severity, message) {
    console.log(`${datetime} [${severity}] - ${message}`);
  }

  const utcDate = new Date();
  const logInformation = (message) => log(utcDate, "INFO", message);
  const logError = (message) => log(utcDate, "ERROR", message);

  logInformation("This is an informational message");

  logError("An exception occurred");
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

  const utcDate = new Date();
  const logInformation = log(utcDate)("INFO");
  const logError = log(utcDate)("ERROR");

  logInformation("This is an informational message!");

  logError("An exception occurred!");
}

// Uncomment to run Example 3:
// example3();

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

  let curriedLog = curry(log);

  // We can call log with all 3 arguments:
  curriedLog(new Date(), "INFO", "This is an informational message");

  // We can pass all arguments separately:
  curriedLog(new Date())("INFO")("This is an informational message");

  // And we can apply partial application:
  const logInfo = curriedLog(new Date())("INFO");
  logInfo("This is an informational message");

  // etc. etc.
}

// Uncomment to run Example 4:
// example4();
