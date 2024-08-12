console.log("Welcome to reservation system")
let avail= parseInt(prompt("Enter avail Number"))
let source=10;
let payment=100;

let userExist=false;
for(let i=1;i<29;i++){
    if(i==avail){
        console.log("User Exists")
        userExist =true;
        break;
    }
}
    if(!userExist){
        console.log("user NOT Exist ")
    }
    else{
        while(true){
            console.log("1.booking\n2.cancellation\n3.payment\n4.exit")
            let choice = parseInt(prompt("Enter Your choice"))
            if(choice===1){
                let booking = parseInt(prompt("Enter number of seats :"))
                source=source+booking;
                console.log("Now You seat is booked",source)
            }
            else if(choice===2){
                let cancellation = parseInt(prompt("Enter number of seats to cancel:"))
                source=source-cancellation;
                  console.log("Now Your seats cancelled is",source)
            }
            else if(choice===3){
                let payment =parseInt(prompt("Enter number of seats to pay"))
                source=source*payment
                console.log("You have done a payment ",source)
            }
            else if(choice===4){
                console.log("Thanks for coming,Visit Again")
                break;
            }
            else{
                console.log("Invalid Input")
                break;
            }
            let next = prompt("Enter Yes or No")
            if(next.toLowerCase()==="no"){
                console.log("Thanks for coming,Visit Again")
                break;
            }

        }
    }
