const http = require('http');

const server = http.createServer((req, res) => {
    const {url, headers} = req
    console.log("URL : " + url);
    console.log("HEADERS : " + headers);
    res.end()
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Listenening on port no ${PORT}`) );