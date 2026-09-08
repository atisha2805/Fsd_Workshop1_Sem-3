const fs = require('fs');

fs.writeFileSync('Sec-A_Student.txt','Hi,We are learning Node.js! and This is experiment -2','utf8');
console.log('File is written successfully');

const data= fs.readFileSync('Sec-A_Student.txt','utf8');
console.log('File content is given as: ',data);

fs.appendFileSync('Sec-A_Student.txt','\nThis is the new line added to the file.','utf8');
console.log('File is appended successfully');

//fs.unlinkSync('example.txt');
//console.log('File is deleted successfully');

//fs.mkdirSync('sample folder');
//console.log('New Folder is created successfully');

//fs.rmdirSync('sample folder');
//console.log('Folder is deleted successfully');

if(fs.existsSync('Sec-A_Student.txt')) {
    console.log('File exists.');
}else {
    console.log('File not found,need to create this file');
}

