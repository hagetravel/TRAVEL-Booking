let firstName= 10;
let lastName= 10;

document.write(firstName + lastName);
//data types:
//primitive data type:number, string, boolean, nul, undefined

let num = 12;
let fname = "ali"
let status= true;

let result;
document.write("<br>" + typeof(status));
//function
function addition(){
    let x=20;
    let y =30;
    let result= x + y;
    document.write(result)

}
//function with parameters
function subtraction(mo,mp){
let x= mo;
let y= mp;
let result= x-y;
document.write(result);
}
//function with Argument
function subtraction(mo,mp symbol){
    let x= mo;
    let y= mp;
    let result= x-y;
    document.write(result);
    }
// function with return type
function substraction(x,y){
    let mo= x;
    let mp= y;
    let z = mo - mp;
    return z;
}
//function calculator
function calculator(n1,n2,s){
    if (s == '+') {
        let res= n1 + n2;
        return res;
        
    } else if (s == '-') { 
        let res = n1 - n2;
        return res;   
    }
    else if (s == '*'){
        let res= n1 * n2;
        return res;
    }
    else{
        return "ERROR"
    }
}