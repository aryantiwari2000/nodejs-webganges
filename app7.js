const fs=require('fs')
const http=require('http')
const path=require('path')
const server= http.createServer((req,res)=>{


    //TO read HTML File

    if(req.url==='/'){

        fs.readFile(__dirname+"/html/web.html","utf-8",(err,data)=>{
        
            if(err) throw err 
            else{

                res.writeHead(200,{"content-type":"text/html"})
                res.write(data);
                res.end();
        }

        })
    }

  else{

    res.writeHead(404,{'content-type':'text/html'});
    res.end("<h2>Page not found</h2>")
  }
}).listen(3000,()=>{console.log("server running successfully");});


