const http=require('http');

const server=http.createServer(function(req,res){

    //to define content type
    res.writeHead(200,{"content-type":"text/plain"})
   
    // res.writeHead(200,{"content-type":"text/html"})

    res.write("Hello this is node js server")
    
    // res.write("<u>Hello this is ,<b>node js server<b/></u>")
  res.end();



}).listen(2000,()=>{console.log("server running successfully");});