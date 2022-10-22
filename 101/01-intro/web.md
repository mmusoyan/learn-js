## what is a website
- websites are files that exist on remote computers `servers`
- we ask a browser `client` to get them for us
- the browser requests and then gets all the necessary files
- then combines them into a website we can see and interact with

## the following work together to show a website to the user:
- `client`
- `server` servers and clients "talk" using `Hypertext Transfer Protocol` which is a language for communication between clients and servers
- `DNS` Domain Name Servers are special computers that match up a human-friendly web address we use in the browser(like "google.com") to the website's real (IP) address.
https://ipinfo.info/html/ip_checker.php

#### from user's POV:
- have internet connection and a browser
- type in the website address
- wait
- see the website in the browser

#### from a browser's POV:
- do a DNS lookup with the address
- send HTTP request message to the server, asking it to send a copy of the website to the client
- receive the website's files
- translate them into machine-readable code (`parsing`)
- compute the content and its representation based on the parsed information
- draw the content pixel by pixel for the user

from a server's POV:
- receive a request from the browser
- check the information in the HTTP request to verify the browser/user has a right to see the requested page
- send appropriate response back to the browser
