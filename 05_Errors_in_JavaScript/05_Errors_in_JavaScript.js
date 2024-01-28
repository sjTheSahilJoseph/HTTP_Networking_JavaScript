// Errors in JavaScript
// When something goes wrong while a program is running, JavaScript uses the try/catch paradigm for handling those errors.
// Try/Catch is fairly common.

// First, an error is thrown.
// For example, let's say we try to access a property on an undefined variable, JavaScript will automatically "throw" an error.
// const a = c.b;
// The Crashes with the error.
// Like ReferenceError: c is not defined.

// By wrapping the code in a try/catch block, we can handle the case where c is not yet defined.

try {
  const a = c.b;
} catch (err) {
  // err has error message and other stuff.

  // console.log("inside catch", err);
  console.log("inside catch");
}

// Basically, now the whole program will not crash. it keeps running but the error will be thrown.
// Because now we are handling the error.

/*
 
    Bugs Vs Errors.

    Bugs are bad.
    Erros are not always bad.

    Bugs are unexpected.
    Errors are expected.

    Error could be like:
    No Internet,
    Remote Server Down,
    User Input.

    So we have to handle them.

    Error handling via try/catch is not the same as debugging.
    Likewise, errors are not the same as bugs.

    Points:
    -> Good code with no bugs can still produce errors that are gracefully handled.
    -> Bugs are, by definition, bits of code that aren't working as intended.

    Debugging.
    'Debugging' a program is the process of going through your code to find where it is not behaving as expected.
    Debugging is a manual process performed by the developer.

    Debugging Examples:
    -> Adding a mising parameter to a function call.
    -> Updating a broken URL that an HTTP call was trying to reach.
    -> Fixing a date picker component in an app that wasn't displaying properly.

    Error Handling.
    "Error Handling" is code that can handle expected edge cases in your program.
    Error handling is an automated process that we design into our productin code to protect it from things like weak internet connections,
    bad user input, or bugs in other people's code that we have to interface with.

    Examples of Error Handling:
    -> Using a try/catch block to detect an issue with user input.
    -> Using a try/catch block to gracefully fail when no internet connection is available.

    In short, don't use try/catch to try to handle bugs.

*/

/*

    Async/Await makes error handling easier.
    Try/Catch are the standard way to handle errors in JavaScript,
    the trouble is, the original Promise API with .then don't allow us to make use
    of try and catch blocks.

    Luckily, the async and await keywords do allow it, yet another reason to prefer the newer syntax.
    
    .catch() callback on promises.
    The .catch() method works similarly to the .then() method, but it fires when a promise is rejected instead of resolved.

*/

let promise = new Promise((resolve, reject) => {
  if (resolve) {
    setTimeout(() => {
      if (true) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  }
});

promise
  .then(() => {
    console.log("yeah");
  })
  .catch((err) => {
    console.log("yeah", err);
  });

// With async await.
async function aw() {
  try {
    const res = await promise;
    console.log("yeah2", res);
  } catch (err) {
    console.log(err);
  }
}
aw();



