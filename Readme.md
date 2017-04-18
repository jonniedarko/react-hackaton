# React Boilerplate App

### Todo:
#### Authentication Basic [ ]
The simplest possible way to enforce access control (no cookies, sessions or anything else). Send the Authorization header along with every request it makes. The username and password are not encrypted, but constructed this way:

 - username and password are concatenated into a single string: username:password
 - Is encoded with Base64
 - the `Basic` keyword is put before this encoded value

```shell
# Example for a user named john with password secret:
curl --header "Authorization: Basic am9objpzZWNyZXQ=" my-website.com  
```

Server side

```js
import basicAuth from 'basic-auth';

function unauthorized(res) {  
  res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
  return res.send(401);
};

export default function auth(req, res, next) {
  const {name, pass} = basicAuth(req) || {};

  if (!name || !pass) {
    return unauthorized(res);
  };

  if (name === 'john' && pass === 'secret') {
    return next();
  }
  return unauthorized(res);
};
```

#### Cookies [ ]
When a server receives an HTTP request in the response, it can send a Set-Cookie header. The browser puts it into a cookie jar, and the cookie will be sent along with every request made to the same origin in the Cookie HTTP header
 - Always use HttpOnly cookies , will not display with `document.cookies`
 - Always use signed cookies

#### Tokens [ ]
JSON Web Token consists of 3 partners:
 - Header, containing the type of the token and the hashing algorithm
 - Payload, containing the claims
 - Signature, which can be calculated as follows if you chose HMAC SHA256: `HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)`
see [jwt.io](http://jwt.io)
```shell
#Example usage - (to check out the validity/content of the token, you can use jwt.io):
curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ" my-website.com  
```

#### Hawk [ ]
A form of signatures which are time sensitive


#### oAuth2 [ ]
