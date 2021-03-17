const http = require('http')

const todos = [
    {id : 1, text : "lorem sadasd",},
    {id : 2, text : "loradem sadasd",},
    {id : 3, text : "loreawem sadasd",},
    {id : 4, text : "lorem sadjmhasd",}
]

const server = http.createServer(
    (req, res)=>{
        res.writeHead(
            400,{
                'Content-Type':'text/json',
                'X-Powered-By':'Node.js'
            }
        )
        res.end(JSON.stringify({
            success: true,
            data : todos
        }))
    }
)

const PORT = 5000

server.listen(PORT, () => console.log("Server Started"))