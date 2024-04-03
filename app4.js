const fs= require('fs')

//To read File

// fs.readFile(__dirname+"/file.txt","utf-8",(err,data)=>{
//  if(err) throw err;
//  console.log(data);
// })

//To write into file

// const msg="THis node js Lecture"
// fs.writeFile(__dirname+"/file.txt",msg,(err)=>{
//     if(err) throw err;
//     console.log("Written Successful");
//    })

//to append data
// const msg="I am Appending data into file..."
// fs.appendFile(__dirname+"/file.txt",msg,"utf8", (err)=>{
//     if(err) throw err;
//     console.log("Appending Successful");
//    }) 

   //To delete file

   fs.unlink(__dirname+"/file.txt" , (err)=>{
    if(err) throw err;
    console.log("file deleted succesful...");
   })