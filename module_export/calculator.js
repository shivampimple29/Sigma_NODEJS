module.exports=function calculate (x,y,operation){
    if(operation==='+'){
        console.log(`${x}+${y}=${x+y}`);
    }
    else if(operation==='-'){
        console.log(`${x}-${y}=${x-y}`);
    }
    else if(operation==='*'){
        console.log(`${x}*${y}=${x*y}`);
    }   
    else if(operation==='/'){
        console.log(`${x}/${y}=${x/y}`);
    }  
    else{
        console.log("Invalid operation");
    }
}