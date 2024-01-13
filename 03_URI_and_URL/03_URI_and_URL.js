/*
Uniform Resource Identifiers.
A URI, or Uniform Resource Identifier, is a unique character sequence that identifies a resource that is (almost always) accessed via the internet.

Just like JavaScript has syntax rules, so do URIs. These rules help ensure uniformity so that any program can interpret the meaning of the URI in the same way.

URIs come in two main types:
    1. URLs
    2. URNs

We'll focus specifically on URLs. But it's important to knwo that URLs are only one kind of URI.

URL and URN are kind of sub-categories of URI.
All URLs are URIs.
But not all URIs are URLs.

URL (locator).
URN (name).

URL:
    http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
    It has:
        protocol: http:
        username: testuser
        password: testpass
        hostname: testdomain.com
        port: 8080
        pathname: /testpath
        search: ?testsearch=testvalue
        hash: #testhash

    -> There are so many things which are optional.
    -> Port is not optional we're always using port to send a http request. But it can be hidden in url like defaut for http we use 80 by default, and for https we use 443.
    -> Pathname can be nested as well.
    -> ? query parameter we can have more than 1.
*/

// We can print each part of url in javascript like this.
const url = 'http://localhost:3000/about?q=query';
const urlObject = new URL(url);
console.log(urlObject);
    // Response:
    //     URL {
    //       href: 'http://localhost:3000/about?q=query',
    //       origin: 'http://localhost:3000',
    //       protocol: 'http:',
    //       username: '',
    //       password: '',
    //       host: 'localhost:3000',
    //       hostname: 'localhost',
    //       port: '3000',
    //       pathname: '/about',
    //       search: '?q=query',
    //       searchParams: URLSearchParams { 'q' => 'query' },
    //       hash: ''
    //     }

/*
Further dessecting a URL.
There are 8 main parts to a URL, though not all the secions are always present, Each piece plays a specific rolw in helping clients locate the specified resource.

Sample URL:
    http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
The 8 sections are:
    Protocol -> http:, https:, ftp:, etc...
        Protocol is required.
    Username and Passwords -> testpass
        Usernames and Passwords are optional.
    Domain -> testdomain.com
        Domain is required.
    Port -> 8080, 3000, etc...
        The default port for a given protocol is used if one is not provided.
    Path -> /, /about, /contact, /about/me/mystuff, etc...
        The default (/) path is used if one isn't provided.
    Query -> ?q=thisone, etc...
        A query is optional.
    Fragment -> #thatone
        A fragment is optional.

-> Not all time those 8 sections will be present.
-> There are some optional sections.
-> The required part is:
    1. Protocol
    2. Domain
-> 'http://localhost/' is a valid URL.
*/

/*
The Protocol.
The protocol, also reffered to as "scheme", is the first component of a URL.
It's purpose is to define the rules by which the data being communicated is displayed, encoded, or formatted.

Some Examples of Different Protocols:
    1. ftp
    2. http
    3. https
    4. mailto
    5. etc...

    For example:
        http://sjthesahiljoseph.com
        mailto:sjthesahiljoseph@josephprogrammingcompany.com

Not all schemes require a "//".
    The http, http is a protocol in a URL is always followed by "://". All URLs have the colon, the the "//" part is only included for schemes that have an authority component.
    A mailto protocol doesn't have authority component so it doesn't need "//" but ':' is must because to tell that it is the protocol.
*/

/*
Ports.
A port in a URL is a virtual point where network connections are made.
Ports are managed by computer's operating system and are numbered from 0 to 65,535.

Whenever we connect to another computer over a network, we're connecting to a specific port on that computer.
Which is being listened to a specific piece of software on that computer. A port can only be used by one program at a time.

The port component of a URL is often not visible when browsing normal sites on the internet, because 99% of the time you're using the default ports for the HTTP and HTTPS schemes: 80 and 443.

Whenever we aren't using a default port, we need to specify it in the URL. For example, port 8080 is often used by web developers when ther're running the server in "test mode" so that they don't use the "production" port "80".

The default port is based on the protocol.
80 and 443 are default but we can also use another ports for https/http or other stuff.
*/

/*
By default most of servers, for static sited, they lookup for a special file named "index.html" as entry point to server.
And we can change paths by "/about.html" for aobut.html on the same directory.
etc...

In the early days of the internet, a URL's path often was a reflection of the file path on the server to the resource the client was requesting. 
    For Example:
        localhost/about.html -> look for about.html file on the same directory.
        localhost/site/about.html -> look for /site/about.html.

Websites used to be very simple. They were just a collection of text document stored on a server. A simple piece of server software could handle incomming HTTP requests and respond with the documents according to the path component of the URLs.

These days it isn't about only the filesystem.
On modern websites, web apps, it's not only about filesystem files. Static sites.
Now we use more complex stuff.
And now we use path as different thing to do some operation on backend and then generate the html and then show it to us.
etc...
*/

/*
Query Parameters.
Query Parameters in a URL aren't always present. In the context of websites, query parameters are often used for marketing analytics or for changing a variable on a web page. With website URLs, query parameters rarely change which page you're viewing, though they often will change the page contents.
Query parameters can be used for anything the server chooses to use them for, just like URL's path.

For example:
    Google Query Parameters.
    https://www.google.com/search?q=sj+sj
    https://www.google.com/search?q=sj+jj
    // q=value -> query parameters. Google can access it with the name of q.
    // /search -> search page.
    // ? seperates the query parameter from rest url parts..
*/
