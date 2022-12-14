var obj=(str:string)=>{
    var s="";
    for(let i=str.length-1;i>=0;i--){
        s=s+str[i];
    }
    if(str === s){
        console.log("palindrom");
    }else{
        console.log("Not Palindrom");
    }
}
let str:string="applppa";
obj(str);