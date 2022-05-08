//navbar

import {container} from "/bathandbodyworks/homepage/components/navbar.js";
let box = document.querySelector("#srinivas-container");
box.innerHTML = container();

//footer

import  {down} from "/bathandbodyworks/footer res/script/myfooter.js";
let contain = document.querySelector(".footer");
contain.innerHTML = down();


//hovering effect

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

//my product



let handshoap = [];

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

let h1 = new products("Wildberry Lemonade","Gentle Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0a270a6e/crop/026487394_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h2 = new products("Island Punch","Gentle Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw04740286/crop/026487386_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h3 = new products("Lakeside Afternoon","Gentle Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd9b51dce/crop/026474055_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h4 = new products("Oceanfront Garden","Gentle Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf0f64f42/crop/026490035_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h5 = new products("Sweet Orange Blossom","Gentle Foaming Hand Soap",9.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa24f152e/crop/026474057_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h6 = new products("Sea Salt & Lime","Gentle Gel Hand Soap",12.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw632f0f2e/crop/026470439_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h7 = new products("Lavender Vanilla","Gentle & Clean Foaming Hand Soap",10.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw71938d61/crop/026410946_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h8 = new products("White Tea & Sage","Gentle Gel Hand Soap",10.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe54dee11/crop/026460679_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h9 = new products("Waikiki Beach Coconut","Gentle Gel Hand Soap",9.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb5dd2898/crop/026426961_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h10 = new products("Kitchen Lemon","Gentle Gel Hand Soap",9.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0b28cffb/crop/026460671_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h11 = new products("Kitchen Lemon","Gentle & Clean Foaming Hand Soap",10.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcabace75/crop/026393062_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h12 = new products("Eucalyptus Spearmint","Gentle & Clean Foaming Hand Soap",9.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw386ad733/crop/026410944_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h13 = new products("Iced Dragonfruit Tea","Gentle Foaming Hand Soap",10.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6ceee82/crop/026460823_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h14 = new products("Butterfly","Gentle Foaming Hand Soap",10.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54c12225/crop/026439201_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let h15 = new products("Strawberry Pound Cake","Gentle Foaming Hand Soap",9.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe8ae5215/crop/026438945_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

handshoap.push(h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15);




handshoap.forEach(({img,fname,type,price,description}) =>{

    let container = document.querySelector("#container_hand");

    let dib = document.createElement("div")
    dib.setAttribute("class","hand_div")

    let img_div = document.createElement("div")
    img_div.style.marginBottom = "2vh"

    
    let image = document.createElement("img")
    image.src = img;

    let span = document.createElement("span")
    span.setAttribute("class","spaan");
    span.innerHTML = '<i class="fa-regular fa-eye"></i><br>' + "QuickLook";
    span.style.fontSize = "11px"
    span.style.marginLeft = "120px"
    //span.style.display = "none"
    img_div.append(image,span)

    let name = document.createElement("h3")
    name.innerText = fname;
    name.style.marginBottom = "2vh"

    let types = document.createElement("p")
    types.innerText = type;
    types.style.fontSize = "13px"
    types.style.marginBottom = "2vh"

    let prices = document.createElement("h3")
    prices.innerText = `$${price}`;
    prices.style.marginBottom = "2vh"

    let descriptions = document.createElement("p")
    descriptions.innerText = description;
    descriptions.style.color = "red"
    descriptions.style.fontSize = "11px"
    descriptions.style.marginBottom = "2vh"


  

    let btn = document.createElement("button")
    btn.setAttribute("id","hand_button")
    btn.innerText = "ADD TO BAG"
    btn.style.padding = "10px 80px"


    btn.addEventListener("click",function(){
        AddToBag({img,fname,type,price,description})

    })
    //carebutton same in every page


    let span1 = document.createElement("span")
    span1.setAttribute("class","spaan1");
    span1.innerHTML = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>'
    + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star"></span>';

    // let span2 = document.createElement("span")
    // span2.innerHTML = '(11)'

     dib.append(img_div,name,types,prices,descriptions,btn,span1)
    container.append(dib)


    img_div.addEventListener("click",function(){
        DisplayPage({img,fname,type,price,description})
       
    })
   
});

let CartData = JSON.parse(localStorage.getItem("bag")) || [];
let Display = JSON.parse(localStorage.getItem("display")) || [];


let AddToBag = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    CartData.push({img,fname,type,price,description});
    localStorage.setItem("bag",JSON.stringify(CartData));
    window.location.reload();
}


let DisplayPage = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    Display.push({img,fname,type,price,description});
    localStorage.setItem("display",JSON.stringify(Display));
    window.location.href = "display.html"
}


