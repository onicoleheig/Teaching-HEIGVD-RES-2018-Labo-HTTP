var protocol = require('./protocol');

var net = require('net');

var client = new net.Socket();

client.connect(protocol.PORT, protocol.IP, function() {
    console.log('Client connected');
    client.write("GET / HTTP/1.1 \r\n\r\n");
});

client.on('data', function(data) {
    console.log('Data received : : ' + data);
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});