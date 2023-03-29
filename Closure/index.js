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

    validate: (CardNo,Pin, TypeOfTrans, Amt) => {


        let withDrawAmount = ()=>{
            if(((account.Balance-Amt)>=0)){
                account.Balance-=Amt;
                console.log("Amount WithDrawn : "+Amt);
                console.log("Account Balance : "+account.Balance);
            }
            else {
                console.log("insufficient funds");
            }
        };

        let depositAmount = ()=>{
            account.Balance+= Number(Amt);
            console.log("Amount Deposited : "+Amt);
            console.log("Account Balance : "+account.Balance);
        };

        for(account of bank.accounts){
            if(account.Card_no == CardNo && account.PIN == Pin  ) {
                if(TypeOfTrans == 'ATM') {
                    return withDrawAmount;
                }
                else {
                    return depositAmount;
                }
            }
        }


        return () => console.log("Error");
    },
    

 
}

let caller = bank.validate(12345679,231,"ATM", 200);
caller();
