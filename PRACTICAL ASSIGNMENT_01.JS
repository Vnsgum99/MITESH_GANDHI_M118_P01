const readline = require("readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const fs=require('fs');
var filename="";
var content="";
var foldername = "";
var rena="";

var start=() =>{
    rl.question("enter your choice: ",(answer) => {

        if (answer== "1"){
            createdire();
        }else if(answer== "2"){
             removedire();      
        }else if(answer == "3"){
            wrfile();
        }else if(answer== "4"){
            reafile();
        }else if(answer== "5"){
            defile();
        }else if(answer== "6"){
            apfile();

        }else if(answer== "7"){
            updfile();
        }else if(answer== "8"){
            renamefile();
        }else if(answer== "9"){
            rl.close();
        }else {
            console.log("wrong choice. please try again");
            start();
        }
    });
};


var instruction = ()=> {
    console.log("\n enter the 1 to create directory");
    console.log(" enter the 2 to remove directory");
    console.log(" enter the 3 to write file");
    console.log(" enter the 4 to read file");
    console.log(" enter the 5 to delete file");
    console.log(" enter the 6 to append file");
    console.log(" enter the 7 to update file");
    console.log(" enter the 8 to rename file");
    console.log(" enter the 9 to exist");
};


var repeat = () =>{
    instruction();
    start();
};

var createdire = () =>{
    console.log("welcome to our directory section");
    rl.question("directary name: ",(ans) => {
        foldername=ans;

    
    if (!fs.existsSync(foldername )) {
      fs.mkdirSync(foldername)
    }
  
        console.log('floder creater');
    repeat();
});
};


var removedire = () =>{

    console.log("welcome to our directory section");
    rl.question("directary name: ",(ans) => {
        foldername=ans;

     fs.rmdir(foldername, { recursive: true }, (err) => {
        if (err) {
            console.log (err);
        }else{
            console.log(`${foldername}  is deleted!`);
        }
        repeat();
     });
       
    }); 
   
};


var wrfile = () =>{
   
    console.log("welcome to our write file section");
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt";
        rl.question("content of file: ", (ans) =>{
            content=ans;
          fs.writeFile(filename,content,function(err,result){
                if(err){
                    console.log(err);
                }else{
                    console.log("file saved sucessfully");
                }
                repeat();
             }); 
             });
    });
    
};


var reafile = () =>{

    console.log("welcome to our write file section");
  
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt" ;

    fs.readFile(filename,"utf8",function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
        repeat();
    });
   

});

};

var defile = () =>{
    console.log("welcome to our delete file section");
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt";

    fs.unlink(filename, function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log('File deleted!');
        }
        repeat();
        
      });
    });
    
};


var apfile =()=>{
    console.log("welcome to our delete file section");
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt";
        rl.question("content of file: ", (ans) =>{
            content=ans;

    fs.appendFile(filename, content,function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log('File append!');
        }
        repeat();
      });
    });
});
   
};

var updfile =()=>{
    console.log("welcome to our delete file section");
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt";
        rl.question("content of file: ", (ans) =>{
            content=ans;


    fs.writeFile(filename, content, function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log('File replace!');
        }
        repeat();
      }); 
    });
});
   
};

var renamefile = () =>{
     console.log("welcome to our delete file section");
    rl.question("Name of file: ",(ans) => {
        filename=ans + ".txt";
        rl.question("new name of file: ", (ans) =>{
            rena=ans + ".txt" ;
    fs.rename(filename, rena, function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log('File rename!');
        }
        repeat();
      });
    });
});
    
};
console.log("\nwelcome to file system");
repeat();
