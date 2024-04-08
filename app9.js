const http=require('http')
const fs=require('fs')
const url=require('url')

http.createServer((req,res)=>{

    var path=url.parse(req.url).pathname;
    console.log(path);
    switch(path){
    case '/':
        renderHTML('html/web.html',res);
        break;
    case '/aboutus':
        renderHTML('html/aboutus.html',res);
         break;
     case '/services':
        renderHTML('html/services.html',res);
         break;
    case '/products':
         renderHTML('html/products.html',res);
        break;
    
        default:
            res.writeHead(404);
            res.write("page not found")
            res.end();
            break;
    }

}).listen (3000,()=>console.log('server is running......'))

function renderHTML(path,res){

    fs.readFile(path,"utf-8",(err,data)=>{

        if (err){
            res.writeHead(404,{"content-type":"text/html"});
            res.write("<h2 style='color:red'>page not found</h2>");     
           }

        else{
            res.writeHead(404,{"content-type":"text/html"});
            res.write(data); 
        }
        res.end();   
    })
}