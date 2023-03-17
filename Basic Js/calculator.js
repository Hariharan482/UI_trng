calculator={
    add: ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a+b : "invalid" ;
    }) ,
    sub : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a-b : "invalid" ;
    }) ,
    mul : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a*b : "invalid" ;
    }) ,
    div : ((a,b)=>{
        return (Number.isInteger(a)&&Number.isInteger(b))? a/b : "invalid" ;
    }) 
};

console.log(calculator.add(1,2));