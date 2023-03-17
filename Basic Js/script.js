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

team=['Kevin','Haaland','Foden','Ruben','Ilkay','Mahrez','Stones','Alvarez','Walker','Silva','Rodri'];
// var j=0;
// for(let i=11;i>=1;i--){
//     team[j++]=`player${i}`;
// }
console.log(team);

team.shift();
console.log(team);

console.log("no of players : "+team.length);

team.unshift("Laporte");
console.log(team);

console.log("sorted player list : "+team.sort())

console.log("Player - Shirt No")
for(player of team){
    console.log(player+" - "+Math.floor(Math.random()*99));
}

var updteam=team.map( player => player.toUpperCase() );
console.log(updteam);

//section 3

(()=>{
    for(let i=0;i<=100;i++){
        console.log(i);
    }
})();

date=new Date();
month=date.getMonth()+1;
console.log(date.getDate()+"/"+ month+"/"+date.getFullYear());

((cel)=>{
    console.log(cel*(9/5)+32+" F");
})(32);

avg=(arr)=>{
    return arr.reduce((prev,curr)=>prev+=curr)/arr.length;
}
console.log(avg([1,2,3,4,5]));

revstr=(str)=>{
    return str.split('').reverse().join("");
}
console.log(revstr("Hello"));
