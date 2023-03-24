//object
let calculator={
    //add funct
    add: ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a+b : "invalid" ;
    }) ,
    //sub funct
    sub : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a-b : "invalid" ;
    }) ,
    //mul funct
    mul : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a*b : "invalid" ;
    }) ,
    //div funct
    div : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a/b : "invalid" ;
    }) 
};

console.log(calculator.mul(1,2));
console.log(calculator.div(1,2));