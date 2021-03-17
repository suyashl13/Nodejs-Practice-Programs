const http = require('http')

let body = [];
const server = http.createServer(
    (req,res)=>{
        const {method, url} = req
        req.on('data', chunk => {
            body.push(chunk)
        }).on('end',()=>{
            res.writeHead(
                400,{
                    'Content-Type':'text/json',
                    'X-Powered-By':'Node.js'
                }
            )
            res.end(JSON.stringify({
                success: true,
                data : "todos"
            }))
        })
        
    }
)

const PORT = 5000

server.listen(PORT, ()=>console.log("Server started"))
