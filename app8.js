const http=require('http');
const student=require('./data/Emp.json');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/JSON'});
        res.end(JSON.stringify(student));
    }
    else if(req.url==='/Node-JS'){
        var data=student.filter(function(item){
            return item.course==="Node-JS";
        });
        res.writeHead(200,{'content-type':'text/JSON'});
        res.end(JSON.stringify(data))
    }
    else if(req.url==='/Vue-JS'){
        var data=student.filter(function(item){
            return item.course==="Vue-JS";
        });
        res.writeHead(200,{'content-type':'text/JSON'});
        res.end(JSON.stringify(data))
    }
    else{
        res.writeHead(404,{'content-type':'text/HTML'});
        res.end("<h2 style='color:red'>Record not Found...</h2>")
    }  
});
server.listen(3000,()=>console.log("Server Created..."));