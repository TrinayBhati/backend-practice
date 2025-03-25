const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);

    if (req.url === "/getData") {
        res.end("no data haha")
    }
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey code');

});

server.listen(7777)

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });