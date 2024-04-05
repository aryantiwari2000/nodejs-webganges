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

    else if(req.url==='/about'){

      const pgPath= path.join(__dirname,"html/aboutus.html");
      fs.readFile(pgPath,"utf-8",(err,data)=>{

        if(err) throw err 
        else{

            res.writeHead(200,{"content-type":"text/html"})
            res.write(data);
            res.end();
    }
      })
    }

    else if(req.url.match('\.css$')){

      const cssPath=path.join(__dirname,"",req.url);
      const fileStream=fs.createReadStream(cssPath,"utf-8");
      res.writeHead(200,{'content-type':'text/css'});
      fileStream.pipe(res);
    }
    else if(req.url.match('\.(jpg|jpeg|png)$')){

      const imgPath=path.join(__dirname,"",req.url);
      const fileStream=fs.createReadStream(imgPath);
      res.writeHead(200,{'content-type':'image'});
      fileStream.pipe(res);
    }
  else{

    res.writeHead(404,{'content-type':'text/html'});
    res.end("<h2>Page not found</h2>")
  }
}).listen(2000,()=>{console.log("server running successfully");});


