/*
    URL Paths
    The URL path comes right after the domain (or port if one is provided) in a URL string.

    In this URL, the path is /home/one:
    http://localhost:5000/home/one
    
    What paths meant in the early internet.
    IN the early days of the internet, and sometimes still today, many web servers simply served raw files from the server's file system.
    For example, if I wanted you to be able to access some text documents, I could start a web server in my documents directory.
    If you made a request to my server you wuld be able to access different documents by using the path that matched my local file structure.

    If I had a file in my local /documents/hello.txt. You could access it by making a GET request to http:localhost:5000/documents/hello.txt.

    How paths are used today
    Most modern web servers don't use that simple mapping of URL path -> file path.
    Technically, a URL path is just a string that the web server can do what it wants with, and modern websites take advantage of that flexbility.
    some common examples of what paths are used for include:
        a. The hierarchy of pages on a website, whether or not that reflects a server's file structure.
        b. Parameters being passed into an HTTP request, like an ID of a resource.
        c. The version of the API.
        d. The type of resource being requested.
*/

/*
    RESTful APIs
    Representational State Transfer, or REST, is a popular convention that HTTP servers follow.
    Not all HTTP APIs are REST APIs or RESTful, but it is very common.

    RESTful servers follow a loose set of rules that makes it easy to build reliable and predictable web APIs.
    REST is more or less a set of conventions about how HTTP should be used.

    Separate and Agnostic
    The big idea behind REST is that resources are transferred via well-recognized, language-agnostic client/server interations.
    A RESTful style means the implementation of the client and server can be done independently of one another, as long as some simple standards, like the names of the available resources, have been established.

    Stateless
    A RESTful architecture is stateless, which means the server does not need to know what state the client is in, nor does the client need to know what state the server is in.
    Statelessness is RESt is enforced by interacting with resources instead of commands.
    Keep in mind, this doesn't mean the applications are stateless - on the contrary, what would "updating a resource" even mean if the server wasn't keeping track of its state?

    Paths in REST
    In a RESTful API, the last section of the path of a URL should specify which resource is being accessed.
    Then, as we talked about in the "methods" chapter, depending on whether the request is a GET, POST, PUT or DELETE, the resource is read, created, updated, or deleted.

    // We can use same endpoint but with different HTTP method.
*/

/*
    URL Query Parameters
    A URL's query parameters appear next in the URL structure but are not always present - they're optional.
    For Example:
        https://www.sjthesahiljoseph.com/about/search?q=education
    q=education is a query parameter. Like headers, query parameters are key/value pairs.
    In this case, q is the key and education is the value.
*/

/*
    The Documentation of an HTTP Server
    When we work with a backend server, it's the responsibility of that server's developes to provide us with instructions, or documentation that expaines how to interact with it.

    For example, the documentation should tell:
    a. The domain of the server
    b. The resources you can interact with (HTTP paths)
    c. the supported query parameters
    d. The supported HTTP methods
    e. Anything else you'll need to know. Good documentation is thorough.
    etc...
*/

/*
    The server has control
    As we mentioned earlier, the server has complete control over how the path in a URL is interpreted and used in a request.
    The same goes for query parameters.
    Not all servers support query parameters for every type of request.
    It's just depends, so you'll need to consult the documentation.
*/

/*
    Multiple Query Parameters
    We can have multiple query parameters.
    The "?" spearates the query parameters from the rest of the URL.
    The "&" is then used to separate every pair of query parameters after that.

    For Example:
    http:localhost:5000/products?sort=true&date=false...
*/


