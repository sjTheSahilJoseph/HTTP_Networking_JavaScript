/*
    JSON Parsing.
    JavaScript Object Notation, or JSOn, is a standard for representing structured data based on JavaScript's object syntax.
    
    JSON is commonly used to transmit data in web apps using HTTP.

    JSON Syntax.
    Because we already understand what JavaScript objects look like, understanding JSOn is easy!
    JSON is just a stringified JavaScript Object.
    The Following is a valid JSON data:
        {
            "name": "SJ",
            "professions": [
                {
                    "title": "programmer",
                    "salary": 0
                }
            ]
        }
        ... etc ...

*/

/*
    Parsing HTTP Responses as JSON.
    JavaScript provides us some easy tools to help us work with JSON.
    After making an HTTP request with the fetch() API, we get a response object.
    That response object offers us some methods that help us interact with the response.
    One such method is the .json() method.
    The .json() method takes the response stream returned by a fetch fequest and returns a promise that resolves into a JavaScript object parsed from the JSON body of the HTTP response.
*/

async function fun1() {
    const res = await fetch("");
    const javaScriptObjectResponse = await res.json();

    console.log(javaScriptObjectResponse);
}

/*
    JSON review.
    JSON is a stringified representation of a JavaScript object, which makes it perfect for saving to a file or sending in an HTTP request.
    Remember, an actual JavaScript object is something that exists only within your program's variable.
    If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.

    It's not just used in JavaScript.
    Just because JSON is called JavaScript Object Notation doesn't mean it's only used by JavaScript!
    JSON is a common standard that is recognized and supported by every major programming language.
*/

/*
    Sending JSON.
    JSON isn't just something we get from the server, we can also send JSON data.

    In JavaScript, two of the main methods we have access to are JSOn.parse(), and JSON.stringify().

    JSON.stringify().
    JSON.stringify() is particularly useful for sending JSON.
    As you may expect the JSON stringify() method does the opposite of parse. It takes a JavaScript object or value as input and converts it into a string.
    This is useful when we need to serialize the objects inot strings to send them to our server or store them in a database.
*/

/*
    Parsing JSON.
    Parse.
    The JSON.parse() method takes a JSON string as input, and constructs the JavaScript value/object described by the string.
    This allows us to work with the JSON as an object.
*/

const json = '{}';
const obj = JSON.parse(json);

console.log(obj);

/*
    XML.
    Extensible Markup Language, or XML is a text-based format for representing structured informatin, just like JSON - it just looks a bit different.

    XML Syntax.
    XML is a markup language like HTML, but it's mroe generalized in that it does not use predifined tags.
    Just like how in JSON an object keys can be called anything, XML tags can also have any name.

    XML Example.
    <root>
        <id>0</id>
        <name>SJ</name>
    </root>

    JSON Example.
    {
        "id": 0,
        "name": "SJ"
    }
*/


