"use strict";

const http = require('http');
const fs = require('fs');

const quotes = require('./quotes.js');

const port = process.env.PORT || 3000;

// Create a Server object
const server = http.createServer((req, res) => {
    //Add error listener
    req.on('error', (err) => {
	console.error(err);
	res.statusCode = 400;
	res.end();
    });

    // Accept only GET method
    if (req.method === 'GET') {
	// For the moment let's keep it simple. The api reponds only with 40 quotes when
	// req.url equals '/'
	if (req.url === '/') {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'application/json');
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    let response = quotes.content;
	    res.end(JSON.stringify(response));
	} else {
	    res.statusCode = 404;
	    res.end();
	}
    } else {
	res.statusCode = 404;
	res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
