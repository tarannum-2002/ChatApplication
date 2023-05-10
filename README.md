# ChatApplication
A chat application using websockets
A WebSocket handshake is much like simple HTTP GET request, but this request contains an ‘upgrade header’, which requests that the server switches to a binary protocol using a WebSocket and gives some information about the WebSocket connection. The server responds with a 101 header to confirm that it is switching protocols, and the WebSocket is open. Real-time data exchange between multiple clients and a server can now take place.

Steps: 

On the server side, simply:

1. Require the web server and pass in the port on which you want to listen

2. Listen for connections

3. Within the body of the connection, send or emit events, listen for specific events, and broadcast to all clients except the sender, and much more.

While over on the client side, all I had to do was:

Create a WebSocket and listen on the port where my app is being hosted
Set up event listeners to listen for specific events
Create event emitters for when the client wants to send data back to the server.