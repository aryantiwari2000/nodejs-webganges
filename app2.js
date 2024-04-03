//path module

const path=require("path")

//To get file location
console.log(__filename);

//To get file name with extension
console.log (path.basename(__filename));

//To get file name without extension
console.log (path.basename(__filename,'.js'));

//To get a current directory
console.log (__dirname);

//To get a  directory name
// console.log (path.dirname(__dirname));
// console.log (path.dirname(__filename));
// console.log (path.extname(__filename));


//To join path

// console.log(path.join('user','webganges','desktop','arpitnode',));
// console.log(path.join('user','webganges','desktop','arpitnode','..'));
// console.log(path.join('user','webganges','desktop','arpitnode','..','..'));
// console.log(path.join('user','webganges','desktop','arpitnode','..','..','index.js'));






