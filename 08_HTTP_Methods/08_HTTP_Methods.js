// HTTP Methods - GET.
// HTTP defines a set of methods that we use every time we make a request.

// The GET method.
// The GET method us used to 'get' a representation of a specified resource.
// You are not taking the data away from the server, but rather getting a representation,
// or copy, of the resource in its current state.
// A get request is considered a safe method to call multiple times because it doesn't alter the state of the server.

// Making a GET request using the Fetch API.
// The fetch() method accepts an optional init object parameter as its second argument that we can use to define things like:
// method: The HTTP method of the request, like GET.
// headers: The header to send.
// mode: Used for security.

// Example GET request using fetch:

async function getData(url) {
    let result = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'some-header': 'valueOfSomeHeader'
        }
    });

    return await result.json();
}

// We don't have body because we are making a GET request and we want something.
// But yes, we can put body as well.
// We use body in other HTTP methods normally when we use body.


/*
    C.R.U.D
    Create . Read . Update . Delete

    When we work with servers, we do these actions normally.
    
    We have some HTTP methods mapped for them. Typically.

    Create -> POST.
    Read -> GET.
    Update -> PUT/PATCH.
    DELETE -> DELETE.

    // There are others HTTP Methods as well.

    // This is the convention.
    // Technically we can use any of these.
    // However, the Convention makes easier as it creates a difference.
    // // We can use same endpoint with differnt end points.
*/

/*
    POST Request.
    An HTTP POST request sneds data to a server typically to create a new resource.
    The body of the request is the payload that is being sent to the server with the request, its type is indicated by the Content-Type header.

    Adding a body.
    The body of the request is the payload that is being sent to the server with the request, its type is indicated by the Content-Type header.
    
    POST requests are generally not safe methods to call multiple times, because it alters the state of the server.
    You wouldn't want to accidentally create 2 accounts for the same user.

*/
// Example Post Request.
async function postData(url, data) {
    let result = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await result.json();
}

/*
    Status Codes
    Status codes is basically sent by the server.

    Error.
    Error are basically sent by client.

    If the request sent successfully, and the problem is with the server, we get status code in response.
    If the request is having some error, we will get error.

    Status Codes.
    When looking at requests we can check on the Status Code of the request to get some information if the request was successful or not.
    100-199: Informational responses. These are very rare.
    200-299: Successful responses. Hopefuly, most responses are 200's!
    300-399: Redirection messages. These are typically invisible because the browser or HTTP client will automatically do the redirect.
    400-499: Client errors, You'll see these often, especially when trying to debug client application.
    500-599: Server errors, You'll see these sometimes, usually only if there is a bug on the server.

    The .status property on a Response object will give you the code.
*/

/*
    HTTP PUT.
    The HTTP PUT method creates a new resource of replaces a representation of the target resource with the contents of the request's body.
    In short, it updates a resource's properties.
*/

// Example PUT Request.
async function putData(url, data) {
    let result = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await result.json();
}


/*
    POST vs PUT.
    The main difference is that PUT is meant to be idempotent, meaning multiple identical PUT requests should have the same effect on the server.
    In contrast, several identical POST requests would have additional side effects, such as creating multiple copies of the resource.

    // Basically many times, we include the ID, that's why it won't create a new entity, but update the current one.
*/

/*
    HTTP Patch vs PUT.
    You may encounter PATCH methods from time to time.
    While it is not nearly as common as the other methods, like PUT, it's important to know about it and what it does.
    The PATCh method is intended to partially modify a resource.

    Long story short, PATCH isn't nearly popular as PUT, and many servers, even if they allow partial updates, will still just use the PUT method for that.

    Example:
        Basically we send the whole object, in PUT.
        And we send just a property in PATCh.
*/

/*
    HTTP DELETE
    It deletes a specified resource.
*/


