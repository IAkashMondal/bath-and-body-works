/**********************promotion code */
let promotioncodechange = document.getElementById("promotioncodechange");  /// click button

let collapase2 = document.querySelector(".promocodedisplay");  // content display
collapase2.style.display= "none"

promotioncodechange.addEventListener("click",function(){
    
    
    
    if(collapase2.style.display === "block"){
  
        collapase2.style.display="none";
        promotioncodechange.classList.add("fa-angle-up");
        promotioncodechange.classList.add("fa-angle-down");
        console.log("none");
    }
    else if(collapase2.style.display === "none"){
        
        collapase2.style.display="block";
        promotioncodechange.classList.remove("fa-angle-up");
        promotioncodechange.classList.add("fa-angle-down");
        
        console.log("display")
    } 
    
})

let GiftCardchange = document.getElementById("GiftCardchange");  /// click button
let collapase3 = document.querySelector(".giftCardDisplay");  // content display
collapase3.style.display= "none"


GiftCardchange.addEventListener("click",function(){
    
    
    
    if(collapase3.style.display === "block"){
  
        collapase3.style.display="none";
        GiftCardchange.classList.add("fa-angle-up");
        GiftCardchange.classList.add("fa-angle-down");
        console.log("none");
    }
    else if(collapase3.style.display === "none"){
        
        collapase3.style.display="block";
        GiftCardchange.classList.remove("fa-angle-up");
        GiftCardchange.classList.add("fa-angle-down");
        
        console.log("display")
    } 
    
})


//billing selection 

let creditcard = document.querySelector(".creditcard");
let PaypalCardDisplay = document.querySelector(".PaypalCardDisplay");
let paypalradioButton = document.getElementById("paypalradioButton");
let creditcardradioButton = document.getElementById("creditcardradioButton");



/*****none display content */
PaypalCardDisplay.style.display = "none"

paypalradioButton.addEventListener("click",()=>{
    
    if(paypalradioButton.checked){
        console.log("hii")
        PaypalCardDisplay.style.display = "block"
        creditcard.style.display = "none"
    }
})

creditcardradioButton.addEventListener("click",()=>{
    
    if(creditcardradioButton.checked){
        console.log("hii")
        PaypalCardDisplay.style.display = "none"
        creditcard.style.display = "block"
    }
})








