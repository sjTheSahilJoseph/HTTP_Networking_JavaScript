/*
    Syncronous JavaScript.
    Means the code will run in sequence, line by line.
*/
// For Example:
console.log("Syncronous");
console.log("first");
console.log("second");
console.log("third");
console.log("fourth");
console.log("fifth");
// These all will print in sequence, means syncronously.

/*
    Asynchrounous or async code runs in parallel. That means code further down runs at the same time that a previous line of code is still running. A good way to visualize this is with the JavaScript function setTimeout().
    setTimeout accepts a function and a number of milliseconds as inputs. It waits until the number of milliseconds has elapsed, and then it executes the function it was given.
*/
console.log("Now Asyncronous");
console.log("first");
console.log("second");
setTimeout(() => console.log("in setTimeout"), 1000);
console.log("third");
console.log("fourth");
console.log("fifth");
/*
Output:
    Now Asyncronous
    first
    second
    third
    fourth
    fifth
    in setTimeout
 */

// It means that the code is not blocked. It runs and the thing which is doing its stuff in the background is doing. While the next code is not blocked.
// That's called non-blocking IO model.

// NOTE: That's also possible that the program exists before this completes the timeout time.
// In that case, setTimeout will not execute the callback function because the program is exited.

/*
Why do we want async code?
We try to keep most of our code synchronous because it's easier to understand, and therefore often has fewer bugs. However, sometimes we need our code to be asynchronous.
For example, whenever you update your user settings on a website, your browser will need to communicate those new settings to the server. The time it takes your HTTP request to physically travel across all the wiring of the internet is usually around 100 milliseconds.
It would be a very poor experience if your webpage froze up while waiting for the network request to finish.
You wouldn't even be able to move the mouse while waiting.

By making network request asynchronously, we let the webpage execute other code while waiting for the HTTP response to come back.
This keeps the user experience snappy and user-friendly.

As a general rule, we should only use async code when we need to for performance reasons, Synchronous code is simplier.
*/

/*
Promises in JavaScript.
A Promise in javaScript is very similar to making a promise in the real world.
When we make a promise we are making a commitment to something.
For Example:
    I promise to explain JavaScript Promises to you. My promise to you has 2 potential outcomes. It is either fullfilled, meaning I eventually explained promises to you, or it is rejected.
    meaning I failed to keep my promise.

The Promise Object represents the eventual fulfillment or rejection of our promise and holds the resulting values. In the meantime, while we're waiting for the promise to be fulfilled.
Our code continuous executing. Promises are the most popular modern way to write asynchronous code in JavaScript.
*/

/*
Promise.
A Promise has 3 states.
1. pending -> initial state, neither fulfilled nor rejected.
2. fulfilled -> meaning that the operation was completed successfully.
3. rejected -> meaning that the operation failed.
*/

// Declaring a Promise.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  }, 1000);
});

function getRandomBool() {
    return 1;
  return Math.random() < 0.5;
}

/*
Using a promise.
The promise object has .then and .catch that make it easy to work with.
Think of .then as the expected follow-up to my promise, and .catch as the "something went wrong" follow-up.

If a promise resolves, its .then function will execute. If the promise rejects, its .catch method will execute.
*/

// For Example:
promise
  .then((message) => {
    console.log("inside then", message);
  })
  .catch((message) => {
    console.log("inside catch", message);
  });
// It'll print message what we have given to the promise.

/*
Promises are the cleanest (but not the only) way to handle the common scenario were we need to make requests to a server, which is typically done via an HTTP request.
In fact, the fetch() function we use to do api calls returns a promise.
*/

/*
I/O, or input/output.
Almost every time you use a promise in JavaScript it will be to handle some form of I/O.
I/O, or input/output, refers to when our code needs to interact with systems outside of the (reletively) simple world of local variables and functions.

Common examples of I/O include:
HTTP requests.
Reading files from the hard drive.
Interactive with a Bluetooth device.

Promises help us perform I/O without forcing our entier program to freeze up while we wait for a response.

*/

/*
Await.
The await keyword is used to wait for a Promise to resolve. Once it has been resolved, the await expression returns the value of the resolved promise.
*/

// Example with .then callback.
promise.then((msg) => {
  console.log(msg);
});

// Example with awaiting a promise.
const f = async () => {
  const message = await promise;

  try {
    console.log(message);
  } catch {
    console.log("error");
  }
};
f();

// NOTE: We have to make our function async in order to use await keyword.
// We have to wrap our code in try catch, to handle resolve, or rejected properly.

/*
Async keyword.
While the await keyword can be used in place of .then() to resolve a promise, the async keywork can be used in place of New Promise() to create a new promise.

When a function is prefixed withe the async keyword, it'll automatically return a Promise.
That promise resolves with the value that your code returns from the function. youc an think of async as "wrapping" your function within a promise.

*/

// New Promise(). - Return a promise.
function getPromise() {
  return new Promise((resolve) => {
    console.log("sj");
    resolve("SJ");
  });
}
async function f2() {
    try {
        const res = await getPromise();
        console.log("*****");
        console.log(res);
    } catch {
        console.log("**********");
        console.log("error");
    }
}
f2()

/*
.then() vs await.
In the early days of web browsers, promises and the await keyword didn't exist, so the only way to do something asynchronously wat to use callbacks.

A callback function is a function that you hand to another function.
That function calls your callback later on.
The setTimeout function is a good example of callback function.
*/

// For Example:
function callbackFunction() {
    console.log("calling back");
}
const milliSeconds = 1000;
setTimeout(callbackFunction, milliSeconds);

/*
While even the .then() syntax is generally easier to use than callbacks without the Promise API, the await syntax makes them even easier to use.
You should use async ans await over .then and new Promise ias a general rule.
*/

/*
We can make chain of .then .then .then.
Or we can use await, await, await.
*/


