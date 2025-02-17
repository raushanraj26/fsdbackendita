//here we can write the data no performing read operation (async)
//overwrite kr dega

const fs=require('fs');
const write=()=>{
    const data="I am new  data file using write file"
fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.log(err);
    else console.log("successfuly updated");
});

}

