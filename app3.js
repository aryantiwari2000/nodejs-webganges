//To learn fs module

// import * as fs from fs/promises
// import {fs} from 'node:fs/promises'
const fs = require('node:fs/promises');
const fs = require('node:fs');
//To read Directory
try{

    const files=  fs.readdir('C:\\Users\\theti\\OneDrive\\Desktop\\Aryan Node')
    for(const file of files)

    console.log(file);
}
catch(error){
    console.log(error);
}