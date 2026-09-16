const fs = require ('fs');
fs.writeFile('sample.txt','Hi , Welcome to Full Stack Development! This is an example of Asynchronous file writing in Node.js',(err)=>{
    if(err) {
        console.log('Error in writing file: ',err);
        return;
    }
    console.log('\nFile is written successfully');
})

fs.readFile('sample.txt','utf8',(err,data) => {
    if(err){
        console.log('Error in reading file: ',err);
        return;
    }
    console.log('\nFile content: ',data);
})

fs.appendFile('sample.txt','\nSemester: 3' , (err) => {
    if(err) {
        console.log('Error in updating file: ',err);
        return;
    }
    console.log('\nFile is updated successfully');
})

fs.readFile('sample.txt','utf8',(err,data) => {
    if(err){
        console.log('Error in reading file: ',err);
        return;
    }  
    console.log('\nFile content after update: ',data);
})

fs.unlink('raw.txt',(err)   => {
    if(err) {
        console.log('Error in deleting file: ',err);
        return;
    }else {
        console.log('\nFile is deleted successfully');
    }
})



