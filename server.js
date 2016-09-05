#!/usr/bin/env node

var fs = require('fs');
var ssh2 = require('ssh2');

var serv = new ssh2.Server({
    hostKeys: [fs.readFileSync('./mykey')],

}, function(client) {
    console.log('client connected!');

    client.on('error', function(err) {
        console.log('client error:', err);
    });
});

var port = 2222;
var hostname = 'localhost'

serv.listen(port, hostname, function() {
    console.log("listening on " + hostname + " port " + port);
});
