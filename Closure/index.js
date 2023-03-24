let bank = {
    accounts: [
        {
            Account_no : 1234,
            Card_no : 12345678 ,
            PIN : 123,
            Balance : 2000
        },
        {
            Account_no : 1235,
            Card_no : 12345679 ,
            PIN : 231,
            Balance : 1000
        },
        {
            Account_no : 1233,
            Card_no : 12345670 ,
            PIN : 321,
            Balance : 1500
        },
        {
            Account_no : 1237,
            Card_no : 12345607 ,
            PIN : 102,
            Balance : 900
        },
        {
            Account_no : 1236,
            Card_no : 12345680 ,
            PIN : 137,
            Balance : 2500
        }
    ],
    ATM : (CardNo,Pin,Amt)=>{
        for(account of bank.accounts){
            if(account.Card_no == CardNo && account.PIN == Pin  ){
                console.log(account.Balance);
                if(((account.Balance-Amt)>=0)){
                    account.Balance-=Amt;
                    console.log("Amount WithDrawn : "+Amt);
                    console.log("Account Balance : "+account.Balance);
                }
                else {
                    console.log("insufficient funds");
                }
                return true;
            }    
        }
        return false;
        
    },

    CDM : (CardNo,Pin,Amt)=>{

        for(account of bank.accounts){
            if(account.Card_no == CardNo && account.PIN == Pin  ){
                account.Balance+=Amt;
                console.log("Amount Deposited : "+Amt);
                console.log("Account Balance : "+account.Balance);
                return true;
            }    
        }
        return false;
    },
}


function transaction(CardNo,Pin,Amt,TypeOfTrans){
    if(TypeOfTrans=="ATM") {
        if(!bank.ATM(CardNo,Pin,Amt)){
            console.log("invalid details");
        }
    }    
    else if ( TypeOfTrans=="CDM" )
    {
        if(!bank.CDM(CardNo,Pin,Amt))
            console.log("invalid details");
    }   
    else 
        console.log("Enter valid transaction type");    
}
transaction(12345679,231,2001,"CDM");
transaction(12345679,231,2001,"ATM");