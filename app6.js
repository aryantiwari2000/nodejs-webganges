const http=require('http')
const hostname='127.0.0.1'

const port=3000

const server= http.createServer((req,res)=>{

    res.statusCode=200
    res.setHeader("content-type","text/plain")
    res.end("Hello this is node js server..."+req.url)

})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`);
})