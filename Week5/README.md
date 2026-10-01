### API Request-Response Process
```text
Application        //client 
    ↓ Request
   API         
    ↓
Server              //Endpoint:  https://jsonplaceholder.typicode.com/users/1
    ↓ Response
Application
```

#### API - An interface that allows one application to communicate with another.
#### Request - The message sent by the application asking for data or an action.
#### Response - The information returned by the server.
#### Endpoint - The URL used to access a specific API resource. A specific URL or URL path exposed by an API that a client sends a request to in order to access a resource or perform an operation.

```text
Common HTTP status codes include:
    200 — OK
    201 — Created
    204 — No Content
    400 — Bad Request
    401 — Unauthorized
    403 — Forbidden
    404 — Not Found
    500 — Internal Server Error
    502 — Bad Gateway
    503 — Service Unavailable
```

