const fs = require ('fs').promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written successfully,");
    }catch(error){
        console.log("Error:",error);
    }
}
writeFile();

async function readFile(){
    try{
        const data = await fs.readFile("promise.txt","utf8");
        console.log("File content:",data);
    }catch(error){
        console.log("Error:",error);
    }
}
readFile();

async function appendFile(){
    try{
        await fs.appendFile("promise.txt","\nWelcome to FSD Training.");
        console.log("Data appended successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}
appendFile();

async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("File renamed successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}
renameFile();

async function deleteFile(){
    try{
        await fs.unlink("raw.txt");
        console.log("File deleted successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}
deleteFile();
