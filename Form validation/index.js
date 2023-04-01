function validate()
{
    // event.preventDefault();
    let valid=true;
    let inputChildren=document.querySelectorAll("form input");
    let h6Children=document.querySelectorAll("form div h6");
    // console.log(inputChildren,h6Children);
    
    h6Children.forEach(element => {
        console.log(element);
    });

    let regex={
        firstName : /^[a-zA-Z]{1,30}$/,
        lastName : /^[a-zA-Z]{1,30}$/,
        email : /^[a-z][a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/,
        cno : /^[0-9]{10}$/,
        pincode : /^[0-9]{6}$/,
        cardNumber : /^[0-9]{16}$/,
        expryYear : /^[0-9]{4}$/,
        cvv : /^[0-9]{3,4}$/
    }
    let emptyErrMsg=document.querySelectorAll("label");
    console.log(emptyErrMsg);
    
    console.log(inputChildren);
    inputChildren.forEach((item,input,arr) => {
        let inputField=inputChildren[input];
        console.log(input);
        
        // console.log(id,typeof(regex[id]));
        if(inputField.value.trim()==""){
            // console.log(inputChildren[input);
            inputField.style.borderColor="#A80000";
            h6Children[input].innerHTML=`${emptyErrMsg[input].innerText} is required`;
            h6Children[input].style.color="#A80000";
            valid=false;
        }
        else if(!(regex[inputField.id]).test(inputField.value)){
            inputField.style.borderColor="#A80000";
            h6Children[input].innerHTML=`${emptyErrMsg[input].innerText} is not valid`;
            h6Children[input].style.color="#A80000";
            valid=false;
        }
        else{
            inputField.style.borderColor="#CCCCCC";
            h6Children[input].innerHTML="";
        }

        if( (input == 6) && (inputField.value<2023) && (inputField.value!=0)){
            inputField.style.borderColor="#A80000";
            h6Children[input].innerHTML=`${emptyErrMsg[input].innerText} is not valid`;
            h6Children[input].style.color="#A80000";
            valid=false;
        }

    });

    return valid;
}
