
// // <--------------------------------------------------- NAVRBAR  IMPORT STRAT HERE -------------------------------------------->


import {container} from "../../bath-and-body-works-2/homepage/components/navbar.js"
document.getElementById("navbar").innerHTML = container();

import  {down} from "../../bath-and-body-works-2/footer res/script/myfooter.js";
let contain = document.querySelector(".footer");
contain.innerHTML = down();
// // <--------------------------------------------------- NAVBAR IMPORT END HERE ------------------------------------------------>

// // <--------------------------------------------------- HOVER EFFECTS START HERE ------------------------------------------------>
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

// // <--------------------------------------------------- HOVER EFFECTS START HERE ------------------------------------------------>



let displayproduct=JSON.parse(localStorage.getItem("display"))
console.log(displayproduct)
displayproduct.map(function(el){
    // {fname,type,price,description,img}
let imagebox=document.querySelector(".prodimage")
let proddetails=document.querySelector(".proddescription")

let towImg = document.createElement("div")
    towImg.setAttribute=("id","twoImg")
let wish=document.createElement("button")
wish.setAttribute("id","wish12")
    wish.innerText="❤️"
    wish.addEventListener("click",function(){
        addToWISHlist(el)
})

let imageB=document.createElement("img")
    imageB.src=el.img
    imageB.style.height="80%"
    imageB.style.width="80%"

let imageS=document.createElement("img")
    imageS.setAttribute("id","imageB")
    imageS.src=el.img
    imageS.style.height="20%"
    imageS.style.width="20%"



let desprodiv =  document.createElement("div")
    desprodiv.setAttribute("id","desprodiv")

let name = document.createElement("p")

    name.innerText =el.fname

let ty = document.createElement("p")
    ty.innerText= el.type ;
let star =document.createElement("div")
 star.innerHTML = "⭐⭐⭐⭐" +"4(278)" +"Reviews"


let des = document.createElement("p")
    des.innerText=el.description

let btnwish = document.createElement("button")
    btnwish.setAttribute("class","cartwish")
    btnwish.innerText="AAD TO BAG"
    btnwish.addEventListener("click",function (){
        addTocart(el)
        });
// appending----------------------->
    towImg.append(wish,imageB,imageS)
    imagebox.append(towImg)
    desprodiv.append(name,ty,star,des,btnwish)
    proddetails.append(desprodiv)

})


// // <--------------------------------------------------- Localstorage is start HERE --------------------------------------------->

let cartData = JSON.parse(localStorage.getItem("cart"))||[];
let wishData = JSON.parse(localStorage.getItem("wish"))|| [];  


// // <--------------------------------------------------- Localstorage is  END HERE --------------------------------------------->
function addTocart(el){
    let displayproduct=JSON.parse(localStorage.getItem("display"))
    console.log(el)
    cartData.push(el)
    localStorage.setItem("cart",JSON.stringify(cartData))
    window.location.href="cart.html"

}

function addToWISHlist(el){
    let displayproduct=JSON.parse(localStorage.getItem("display"))

    console.log(el)
    wishData.push(el)
    localStorage.setItem("wish",JSON.stringify(wishData))
    window.location.reload()

}