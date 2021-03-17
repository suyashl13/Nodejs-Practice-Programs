const http = require('http');

let body = [];

const server = http.createServer(
    (req, res) => {
        const {method, url, statusCode} = req
        
        req.on('data', data => {
            body.push(data)
        }).on('end',()=>{
            body = Buffer.concat(body).toString()
            console.log(body)
        })

        console.log(method, url, statusCode)
        res.end();
    }
)

const PORT = 5000

server.listen(PORT, () => console.log("Listening on port no. : " + PORT))