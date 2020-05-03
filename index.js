const chalk = require('chalk');
const text = require("./data");
const http = require('http');

const server = http.createServer((req, res) => {
	res.end(text.helloText);
});

server.listen(3000, () => {
	console.log("Server has been started...");
});
