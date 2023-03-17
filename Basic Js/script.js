//section 1

console.log(1+2);
console.log('apple'+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true)
console.log(0==false)
console.log(1===true)
console.log(2=="2")

//section 2

//initialising array
var team=['Kevin','Haaland','Foden','Ruben','Ilkay','Mahrez','Stones','Alvarez','Walker','Silva','Rodri'];
// var j=0;
// for(let i=11;i>=1;i--){
//     team[j++]=`player${i}`;
// }
console.log(team);

//removing an element from an array
team.shift();
console.log(team);

// length of an array
console.log("no of players : "+team.length);

//adding element in a array
team.unshift("Laporte");
console.log(team);

//sort funct
console.log("sorted player list : "+team.sort())

//random funct
console.log("Player - Shirt No")
for(let player of team){
    console.log(player+" - "+Math.floor(Math.random()*99));
}

//case conversion
var updatedTeam=team.map( player => player.toUpperCase() );
console.log(updatedTeam);

//section 3

//print 0 to 100
(()=>{
    for(let i=0;i<=100;i++){
        console.log(i);
    }
})();

//display date
let date=new Date();
let month=date.getMonth()+1;
console.log(date.getDate()+"/"+ month+"/"+date.getFullYear());

//celsius to fahrenheit conversion
var celsiusToFahrenheit=(celsius)=>{
    return celsius*(9/5)+32+" F";
}
console.log(celsiusToFahrenheit(32));

//find avg 
var avg=(arr)=>{
    return arr.reduce((prev,curr)=>prev+=curr)/arr.length;
}
console.log(avg([1,2,3,4,5]));

//reverse a string
var reverseStr=(str)=>{
    return str.split('').reverse().join("");
}
console.log(reverseStr("Hello"));
