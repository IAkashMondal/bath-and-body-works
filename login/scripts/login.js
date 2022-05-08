//navbar

import {container} from "../../homepage/components/navbar.js";
let box = document.querySelector("#srinivas-container");
box.innerHTML = container();

//footer
import  {down} from "../../footer res/script/myfooter.js";
let contain = document.querySelector(".footer");
contain.innerHTML = down();




let newandnowFun = () => {
    let newandnow =  document.querySelector("#new-and-now");
    newandnow.style.display = "flex";
    // newandnow.style.position = "fixed";
    newandnow.style.backgroundColor = "white";
    newandnow.style.zindex = 8;
    newandnow.style.transition = "10s ease-in-out";
    // newandnow.style.textDecoration = "underline blue";
    
   }

let newandnowFun1 = () => {
    let newandnow =  document.querySelector("#new-and-now");
    newandnow.style.display = "none";
    newandnow.style.zindex = -1;
    
   }

let  bodycareFun = () => {
    let bodycare =  document.querySelector("#body-care");
    bodycare.style.display = "flex";
    // newandnow.style.position = "fixed";
    bodycare.style.backgroundColor = "white";
    bodycare.style.zindex = 8;
    bodycare.style.transition = "10s ease-in-out"
    
   }

let  bodycareFun1 = () => {
    let bodycare =  document.querySelector("#body-care");
    bodycare.style.display = "none";
    bodycare.style.zindex = -1;
    
   }

let  handandSoapsFun = () => {
    let handandsoap =  document.querySelector("#sanitizers");
    handandsoap.style.display = "flex";
    // newandnow.style.position = "fixed";
    handandsoap.style.backgroundColor = "white";
    handandsoap.style.zindex = 8;
    handandsoap.style.transition = "10s ease-in-out"
    
   }

let  handandSoapsFun1 = () => {
    let handandsoap =  document.querySelector("#sanitizers");
    handandsoap.style.display = "none";
    handandsoap.style.zindex = -1;
    
   }

let  bodyFragranceFun = () => {
    let bodyfragrance =  document.querySelector("#fragrance");
    bodyfragrance.style.display = "flex";
    // newandnow.style.position = "fixed";
    bodyfragrance.style.backgroundColor = "white";
    bodyfragrance.style.zindex = 8;
    bodyfragrance.style.transition = "0.4s ease-in-out"
    
   }

let  bodyFragranceFun1 = () => {
    let bodyfragrance =  document.querySelector("#fragrance");
    bodyfragrance.style.display = "none";
    bodyfragrance.style.zindex = -1;
    
   }

   let  giftsFun = () => {
    let giftIdeas =  document.querySelector("#gifts");
    giftIdeas.style.display = "flex";
    // newandnow.style.position = "fixed";
    giftIdeas.style.backgroundColor = "white";
    giftIdeas.style.zindex = 8;
    giftIdeas.style.transition = "0.4s ease-in-out"
    
   }

let  giftsFun1 = () => {
    let giftIdeas =  document.querySelector("#gifts");
    giftIdeas.style.display = "none";
    giftIdeas.style.zindex = -1;
    
   }

document.querySelector(".hovering-ptag1").addEventListener("mouseover", newandnowFun);
document.querySelector(".hovering-ptag1").addEventListener("mouseout", newandnowFun1);

document.querySelector(".hovering-ptag2").addEventListener("mouseover", bodycareFun);
document.querySelector(".hovering-ptag2").addEventListener("mouseout", bodycareFun1);

document.querySelector(".hovering-ptag3").addEventListener("mouseover", handandSoapsFun);
document.querySelector(".hovering-ptag3").addEventListener("mouseout", handandSoapsFun1);

document.querySelector(".hovering-ptag4").addEventListener("mouseover", bodyFragranceFun);
document.querySelector(".hovering-ptag4").addEventListener("mouseout", bodyFragranceFun1);

document.querySelector(".hovering-ptag5").addEventListener("mouseover", giftsFun);
document.querySelector(".hovering-ptag5").addEventListener("mouseout", giftsFun1);








let userDetails = JSON.parse(localStorage.getItem("userDetails"))
console.log('userDetails:', userDetails)

document.querySelector("form").addEventListener("submit", loginFun)

let btn = document.querySelector(".btn").addEventListener("click", creatFun)

function creatFun() {
    window.location.href="../login/create.html"
}

function loginFun() {
    event.preventDefault()
    let enteredEmail = document.querySelector("#enteredEmail").value
    let enteredPassword = document.querySelector("#enteredPassword").value
    console.log('enteredPassword:', enteredPassword)
    console.log('enteredEmail:', enteredEmail)

    let flag = false;
    for (let i = 0; i < userDetails.length; i++) {
        let actEmail = userDetails[i].userEmail
        console.log('actEmail:', actEmail)
        let actPassword = userDetails[i].userPassword
        console.log('actPassword:', actPassword)

        if (enteredEmail == actEmail && enteredPassword == actPassword) {
            flag = true;
            document.querySelector("#enteredEmail").value = null
            document.querySelector("#enteredPassword").value = null
            break;
        }
    }
    if (flag) {
         window.location.href="../homepage/index.html";
    }

    else {
        alert("invalid Credentials")
        document.querySelector("#enteredEmail").value = null
        document.querySelector("#enteredPassword").value = null
    }

}