//navbar

import {container} from "/bath-and-body-works-2/homepage/components/navbar.js";
let box = document.querySelector("#srinivas-container");
box.innerHTML = container();

//footer
import  {down} from "/bath-and-body-works-2/footer res/script/myfooter.js";
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




let willflower = [];

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

let f1 = new products("Laundry Day","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3022bdd5/crop/026397324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f2 = new products("Waikiki Beach Coconut","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw412c476c/crop/026399185_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f3 = new products("Eucalyptus Spearmint","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1c3d3c5/crop/026397334_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f4 = new products("Salted Butterscotch & Vanilla","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fabd454/crop/026400285_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f5 = new products("Fresh Sheets","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08d8480a/crop/026438467_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f6 = new products("Strawberry Pound Cake","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc8dbe3b/crop/026394689_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f7 = new products("Navy Wallflowers Scent Control™","Fragrance Plug",12.50 ,"$7 Limited Time Only!","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw911c291a/crop/026273224_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f8 = new products("White Wallflowers Scent Control™","Fragrance Plug",12.50 ,"$7 Limited Time Only!","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdd602de9/crop/026194284_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f9 = new products("Lavender Vanilla","Wallflowers Refills 2-Pack",14.50 ,"$7 Limited Time Only!","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw93fdcecf/crop/026412381_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f10 = new products("Fresh Cotton","Wallflowers Refills 2-Pack",14.50 ,"$7 Limited Time Only!","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwca05d7f2/crop/026412390_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f11 = new products("Fresh Cut Lilacs","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa46718f9/crop/026397316_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f12 = new products("Fresh Spring Morning","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce09b247/crop/026487220_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f13 = new products("Linen & Lavender","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdc660c06/crop/026411736_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f14 = new products("Mahogany Teakwood Increased Intensity","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcff163db/crop/026358678_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let f15 = new products("Sun-Washed Citrus","Wallflowers Fragrance Refill",7.50 ,"Mix & Match: 5/$18 or 7/$24","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw63552158/crop/026397341_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

willflower.push(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15);




willflower.forEach(({img,fname,type,price,description}) =>{

    let container = document.querySelector("#container_flower");

    let dib = document.createElement("div")
    dib.setAttribute("class","flower_div")

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
    btn.setAttribute("id","flower_button")
    btn.innerText = "ADD TO BAG"
    btn.style.padding = "10px 80px"

    btn.addEventListener("click",function(){
        AddToBag({img,fname,type,price,description})

    })


    let span1 = document.createElement("span")
    span1.setAttribute("class","spaan1");
    span1.innerHTML = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>'
    + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star "></span>' + '<span class="fa fa-star"></span>';

    // let span2 = document.createElement("span")
    // span2.innerHTML = '(11)'

     dib.append(img_div,name,types,prices,descriptions,btn,span1)
    container.append(dib)


    img_div.addEventListener("click",function(){
        DisplayPage({img,fname,type,price,description})
       
    })
   
});


let CartData = JSON.parse(localStorage.getItem("bag")) || [];
// let Display = JSON.parse(localStorage.getItem("display")) || [];


let AddToBag = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    CartData.push({img,fname,type,price,description});
    localStorage.setItem("bag",JSON.stringify(CartData));
    window.location.reload();
}


let DisplayPage = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    let Display = [];
    Display.push({img,fname,type,price,description});
    localStorage.setItem("display",JSON.stringify(Display));
    window.location.href = "display.html"
}

