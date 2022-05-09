
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
    imageB.style.height="500px"
    imageB.style.width="218px"

let imageS=document.createElement("img")
    imageS.setAttribute("id","imageB")
    imageS.src=el.img
    imageS.style.height="80px"
    imageS.style.width="45px"



let desprodiv =  document.createElement("div")
    desprodiv.setAttribute("id","desprodiv")

let name = document.createElement("h3")

    name.innerText =el.fname

let ty = document.createElement("p")
    ty.innerText= el.type ;
let star =document.createElement("div")
 star.innerHTML = "⭐⭐⭐⭐" +"4(278)" +"Reviews"


let des = document.createElement("p")
    des.style.color="red";
    des.innerText=el.description ;

let btnwish = document.createElement("button")
    btnwish.setAttribute("class","hbs")
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
    window.location.href="../cartpage/cart.html"

}

function addToWISHlist(el){
    let displayproduct=JSON.parse(localStorage.getItem("display"))
alert("ITEM ADDED TO WISHLIST ❤️ ")
    console.log(el)
    wishData.push(el)
    localStorage.setItem("wish",JSON.stringify(wishData))
    window.location.reload()

}

// function addTocart(ele){
//     var products= JSON.parse(localStorage.getItem("cart")) || []; //cart
//     console.log(ele)
//     products.push(ele)
//     localStorage.setItem("cart",JSON.stringify(products))
//     window.location.reload()

// }


let MyProducts1 =[]

class Category {
    constructor(fname,type,price,description,img){

      
        this.img = img;
        this.fname = fname;
        this.type = type;
        this.price = price;
        this.description = description;
    }
}

class products extends Category{

    constructor(fname,type,price,description,img){
        super(fname,type,price,description,img);
    }
}
let a1 = new products("Eucalyptus Spearmint","Moisturizing Body Lotion",15.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2e5a3725/crop/026353210_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

let a3 = new products("Black Chamomile","Pillow and Body Mist",14.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf48f3eef/crop/026353233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

let a5 = new products("Orange Ginger","Gentle & Clean Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2455126b/crop/026410945_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

let a7 = new products("Eucalyptus Spearmint","Body Wash and Foam Bath",14.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22111d6f/crop/026353200_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")


MyProducts1.push(a1,a3,a5,a7) ;

MyProducts1.forEach(({img,fname,type,price,description}) =>{

    let box =document.createElement("div");
    box.setAttribute("class","suggestion_box")

    let imga = document.createElement("img")
    imga.setAttribute("class","suggestion_img")
        imga.src=img;
  
    let alltext = document.createElement("div")
    alltext.setAttribute("class","suggestion_alltext")
        
    let title = document.createElement("h4")
    title.setAttribute("class","suggestion_title")
        title.innerText= fname ;
        
    let descr= document.createElement("p")
    descr.setAttribute("class","suggestion_description")
        descr.innerText= type ;
    
    let pri= document.createElement("p")
        pri.setAttribute("class","suggestion_price")
        pri.innerText= price ;
    
    let offer= document.createElement("p")
    offer.setAttribute("class","suggestion_offer")
         offer.innerText= description ;
    
    let btn2 = document.createElement("button")
    btn2.setAttribute("class","QUICKLOOK","trans")
        btn2.innerText="QUICKLOOK"
        btn2.addEventListener("click",function (){
            QUICKLOOK({img,fname,type,price,description}) ;
        });
      
    alltext.append(title,description,price,offer) ;
    box.append(imga,btn2,alltext) ;
    document.querySelector(".suggestion").append(box) ;
}) ;
function QUICKLOOK({img,fname,type,price,description}){
    let display = [];
    display.push({img,fname,type,price,description})
    localStorage.setItem("display",JSON.stringify(display))
    window.location.href="../display/display.html"

}
