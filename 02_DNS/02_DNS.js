/*
    There are a lot of servers, a lot of clients, over the internet.
    How can I tell that I wanna communicate to that specific computer over the Internet or web?
    We have IP (Internet Protocol) Address.
    Each computer which is connecting to the internet has its own IP address.
    IP looks like this: 123.123.123.123, this is just an example. But it is 4 part separated by ".".
    Each section can have 0-255.
    Remember that that format of Ip address is one format called "IPv4".
    It can have more possible range, In Ipv6, each section is seperated by a colon ":" rather than a ".".
    Each section sontains 8 sections in IPv6.
    
    In order to communicate over the internet we need to have other computer's IP address, It could be ipv4 or ipv6.
    But the thing is let's say, we need to watch a movie from a website. For doing that we need to have their IP addresss.
    Then we request for that specific movie. And it'll send back to us. Then we'll able to watch that movie.
    But that's quite hard to remember an IP address of so many websites we use everyday.
    So that's why, we have DNS.

    DNS.
    DNS stands for Domain Name System.
    It maps hunam readable like "josephprogrammingcompany.com" to an IP address (server's IP).
    Now when I need to go to that IP address, that server, I simplly type "josephprogrammingcompany.com" and it automatically sends request to it's IP.

    There are 2 steps:
        1. Resolve IP from Domain Name.
        2. Send Request.

    Each device connected to the internet has a unique IP address. When we browse the internet, the domains we navigate to are all associated with a particular IP address.
    For Example: this joseph programming company URL points to about page.
        "josephprogrammingcompany.com/about".
    The domain portion of the URL is "josephprogrammingcompany.com".
     "josephprogrammingcompany.com" converts to a specific IP address, and that IP address tells your computer exactly where to communicate with that about page.
*/

// JavaScript has URL API, we can use to do some stuff with URLs.
const urlObject = new URL("josephprogrammingcompany.com");
console.log(urlObject.hostname);

/*
    DNS is basically like giant phonebook for interet.

    How DNS works?
    Let's introduce ICANN. ICANN is not-for-profit organization that manges DNS for the entire internet.
    Whenever your computer attempts to resolve a domain name. It contacts one of ICANN's "root nameservers" whose address is included in your computer's networking configuration.
    From there, that nameserver can gather the domain records for a specific domain name from their distribution DNS database. 

    ICANN stands for:
        Internet Corporation for Assigned Names and Numbers.
*/

/*
    Subdomain.
    Subdomain prefixes a domain name, allowing a domain to route network traffic to many different servers and resources.
    For Example:
        josephprogrammingcompany.com is hosted on different server with different IP address.
        and api.josephprogrammingcompany.com is hoseted on different server with different IP address.
    api.jose* is subdomain of jospeh*.
    
    We purchased, joseph* but now we can use subdomain within it.
*/
