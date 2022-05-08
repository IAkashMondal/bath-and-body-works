
//navbar

import {container} from "/bathandbodyworks/homepage/components/navbar.js";
let box = document.querySelector("#srinivas-container");
box.innerHTML = container();


//footer
import  {down} from "/bathandbodyworks/footer res/script/myfooter.js";
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




document.querySelector("form").addEventListener("submit", formSubmit)

let userDetails = JSON.parse(localStorage.getItem("userDetails")) || []
function formSubmit()
{
    event.preventDefault()
    // console.log("yes")
    function userData(fn, ln, em, zc, pn, pw)
    {
        this.firstName = fn
        this.lastName = ln
        this.userEmail = em
        this.zipCode = zc
        this.phoneNumber = pn
        this.userPassword = pw
    }
    let firstName = document.querySelector("#firstName").value
    let lastName = document.querySelector("#lasttName").value
    let userEmail = document.querySelector("#userEmail").value
    let zipCode = document.querySelector("#zipCode").value
    let phoneNumber = document.querySelector("#phoneNumber").value
    let userPassword = document.querySelector("#userPassword").value
    let userEmailConf = document.querySelector("#userEmailConf").value

    let userObj = new userData(firstName, lastName, userEmail, zipCode, phoneNumber, userPassword)

    document.querySelector("#firstName").value = null
    document.querySelector("#userEmail").value = null
    document.querySelector("#userPassword").value = null
    document.querySelector("#lasttName").value = null
    document.querySelector("#zipCode").value = null
    document.querySelector("#phoneNumber").value = null
    document.querySelector("#userEmailConf").value = null

    if(userEmail === userEmailConf) {
        userDetails.push(userObj)
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        window.location.href="login.html"
    }

    else {
        alert("Enter same email id")
    }
}
