const readline = require("readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const os=require("os");

var start=() =>{
    rl.question("enter your choice: ",(answer) => {

        if (answer== "1"){
            osarc();
        }else if(answer== "2"){
             freemem();      
        }else if(answer == "3"){
            totalme();
        }else if(answer== "4"){
            osplat();
        }else if(answer== "5"){
            infouser();
        }else if(answer== "6"){
            rl.close();
        }else {
            console.log("wrong choice. please try again");
            start();
        }
    });
};


var instruction = ()=> {
    console.log("\n enter the 1 to os cpu architecture");
    console.log(" enter the 2 to free memory of the system");
    console.log(" enter the 3 to total memory of the system");
    console.log(" enter the 4 to os platform");
    console.log(" enter the 5 to information about the current user");
    console.log(" enter the 6 to exist");
};


var repeat = () =>{
    instruction();
    start();
};

var osarc = () =>{

    console.log("Architecture: " + os.arch());
    repeat();
};
var  freemem= ()=>{
    console.log("free memory: " + os.freemem()/ (1024*1024*1024) +"gb");
    repeat();
};
var totalme = () =>{
    console.log("total memory: " + os.totalmem()/ (1024*1024*1024*1024) +"tb");
    repeat();
};
var osplat =() =>{
    console.log("os platform: " + os.platform());

    repeat();
};
var infouser =() =>{
    console.log("information about the current user: " + os.userInfo()); 
    repeat();
};
console.log("\nwelcome to os module system");
repeat();

