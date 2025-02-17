//here we can write the data no performing read operation
//overwrite kr dega

const fs=require('fs');
const data="I am new data"
fs.writeFileSync("data.txt",data);
