let sections=document.querySelectorAll("section");
let buttons=document.querySelectorAll("button");
let shapechild=document.querySelector(".shape").children;

//shape object
let shapeObj={
    Circle : {
        name : "Circle",
        resText : "Circle",
        textdata : "2. Enter Radius",
        tableData : {
            RADIUS : "π",
            AREA : "πr &sup2;",
            PERIMETER : "2*π*r"
        },
        area : (radius)=>{
            return Math.PI*radius*radius;
        },
        perimeter : (radius)=>{
            return 2*Math.PI*radius;
        }
    },
    Triangle : {
        name : "Triangle",
        resText : "Equilateral Triangle",
        textdata : "2. Enter Side (Base & Height)",
        tableData : {
            SIDE : "s",
            AREA : "0.433*s*s",
            PERIMETER : "3*s"
        },
        area : (side)=>{
            return 0.433*side*side;
        },
        perimeter : (side)=>{
            return 3*side;
        }
    },
    Square : {
        name : "Square",
        resText : "Square",
        textdata : "2. Enter Side",
        tableData :{
            SIDE : "s",
            AREA : "s*s",
            PERIMETER : "4*s"
        },
        area : (side)=>{
            return side*side;
        },
        perimeter : (side)=>{
            return 4*side;
        }
    }
}

//storing section no in session storage
let setPage=()=>{
    if(sessionStorage.getItem("sectionIndex")==null){
        sessionStorage.setItem("sectionIndex",0);
    }
    return sessionStorage.getItem("sectionIndex");
};
let sectionIndex=setPage();
sections[sectionIndex].style.display="flex";

//storing p numberValue and textbox numberValue in session storage
document.querySelector("#descrptnText").innerText=sessionStorage.getItem("ptext");
document.querySelector("#numberValue").value=sessionStorage.getItem("textbox");

//remvoing ticks inside shapes
let removeTick=()=>{
    let tick=document.querySelector(".tick");
        if(tick!=null){
            tick.remove();
        }
}

//calculating area perimeter nd storing in an array
let calc=(side,shapeType)=>{
    // console.log(shapeType);
    let arr=[];
    arr[0]=side+" cm";
    arr[1]=(Math.round(shapeObj[shapeType].area(side)*100)/100)+" sq cm";
    arr[2]=(Math.round(shapeObj[shapeType].perimeter(side)*100)/100)+" cm";
    return arr;
}


//create table
let createTable=()=>{
    let tableDiv=document.querySelector("#table-field");
    let textvalue=sessionStorage.getItem("textbox");
    let shapedata=shapeObj[sessionStorage.shape];
    let table="<table>";
    let calcArr=calc(textvalue,shapedata.name);
    // console.log(calcArr,textvalue,shapedata.name);
    let arrIndex=0;
    for(let val in shapedata.tableData){
        table+="<tr>";
        table+=("<td>"+val+"</td>");
        table+=("<td>"+shapedata.tableData[val]+"</td>");
        table+=("<td>"+calcArr[arrIndex++]+"</td>");
        table+="</tr>";
    }
    tableDiv.innerHTML=table;
    let shapediag=document.createElement("div");
    shapediag.setAttribute("class",shapedata.name);
    removeTick();
    let p=document.createElement("p");
    p.innerHTML=shapedata.resText;
    tableDiv.prepend(p);
    tableDiv.prepend(shapediag);
} 

//restoring table after refreshing page
if(sessionStorage.getItem("shape")){
    createTable();
}

let checkEmpty=()=>{
    // console.log(document.querySelector("#numberValue").value);
    if (document.querySelector("#numberValue").value == "" )
    {
        return false;
    }
    return true;
}
//changing display style of sections
for (let button of buttons){
    button.addEventListener("click",()=>{
        if(sectionIndex==1 && !checkEmpty()){
            window.alert("enter side/radius");
            sectionIndex=1;
        }
        else{
            sectionIndex=(++sectionIndex)%3;    
        }
        for(let section=0;section<sections.length;section++){
            sections[section].style.display="none";
        }
        sections[sectionIndex].style.display="flex";
        sessionStorage.setItem("sectionIndex",sectionIndex);
    })
}

//storing textbox value
document.querySelector("#numberValue").addEventListener("keyup",()=>{
    let keyvalue=document.querySelector("#numberValue").value;
    sessionStorage.setItem("textbox",keyvalue);
})

//changing display style of tick nd button 
for(let shape of shapechild){
    shape.addEventListener("click",(event)=>{
        let className=event.target.className;
        removeTick();
        output="";
        output+='<div class="tick">'
        output+='<i class="fa-solid fa-check"></i>'
        output+='</div>'
        event.target.innerHTML=output;
        document.querySelector("#nextButton").style.display="block";
        let descrptnText=document.querySelector("#descrptnText");
        descrptnText.innerText=shapeObj[className].textdata;
        sessionStorage.setItem("shape",className);
        sessionStorage.setItem("ptext",shapeObj[className].textdata);
    })
}

//creating table after clicking calculate button
document.querySelector("#calculate").addEventListener("click",()=>{
    if(checkEmpty()){
    createTable();}
})

document.querySelector("#start-again").addEventListener("click",()=>{
    document.querySelector("#nextButton").style.display="none";
    document.querySelector("#numberValue").value="";
    sessionStorage.clear();
})