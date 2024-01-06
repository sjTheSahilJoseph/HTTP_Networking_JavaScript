// We'll learn about HTTP Networking.

// What is HTTP?
// HTTP means Hyper Text Transfer Protocol.
// Protocol means the way to communicate basically.
// By HTTP we communicate through Hyper Text.
// We can share html,css,js,media via internet using HTTP protocol.
// That's why we see "http://" in url.

// Let's say I write "Say 'SJ'" on a paper. And a person will read that paper, He'll understand what I'm saying.
// So in this case, I used a protocol we can name it "text paper protocol" where those letters, language, have some meaning and we both understood that meaning.
// Same with HTTP.

// Basically, HTTP is a simple Request-Response system. The "requesting" computer (client), asks another computer (server) for some information. That (server) recieves the request and send response to the (client). The response contains that requested information.

// What comes first?
// 1. Request.
// 2. Response.
// Answer => Request.

// There are other protocols for communicating over the internet, but HTTP is the most popular and is particulary great for websites and web applications. Each time we visit a website, our browser is making an HTTP request to the website's server. The server responds with all the text, images, and styling information that your browser reads to render its pretty website.

// A URL or Uniform Resource Locator, is essentially the address of another computer, or server on the internet. Part of the URL specifies how to reach the server, and part of it tells the server what information we want.

// Not ever URL is HTTP URL.
// In order to specify that this url is HTTP url, we prefix it with http://.

// Generally, Frontend is the client, where user can see the interface.
// Frontend sends the request to the server and server (Backend) sends response to the frontend, and frontend then show response to the user.
// Backend also sends some request to other backend server.
// And in this case, the backend server is acting as client as well for next server.
// Then the next server will send data to the requested server, and requested server sends data to the our client (frontend).

// JavaScript FetchAPI.
// The fetch function is made available to us by the JavaScript language running in the browser, all we have to do is provide it with the parameters it requires.

// Using Fetch:
// We can provide the url, let's say localhost with port 3000 is also a http url by the way.
const url = 'localhost:3000';
// Settings is an object containing some request specific settings.
const settings = {
    method: 'GET',
};
// await keyword tells the JavaScript to wait until the response comes back from the server before continue. (JavaScript works on Non-Blocking I/O Model).
const response = await fetch(url, settings);
// responseData is basically we're converting our responce data into valid json.
const responseData = await response.json();

// Serveris always listening for requests.
// They don't shut down.
// Server is the backend.


