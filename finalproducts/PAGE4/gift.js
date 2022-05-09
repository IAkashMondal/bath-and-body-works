
let GiftShop = [];


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


let g1 = new products("Champagne Toast","Gift Box Set",34.95 ,52.00 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw622857e3/crop/025144301_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g2 = new products("A Thousand Wishes","Gift Box Set",34.95 ,42.00 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe183ea7e/crop/025144307_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g3 = new products("Japanese Cherry ","Gift Box Set",34.95 ,65.50 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw704faaf7/crop/025144303_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g4 = new products("Pure Wonder","Mini Gift Box Set",17.50 ,24.50 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7aaefd47/crop/025144297_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g5 = new products("Sunshine Mimosa","Gift Box Set",35.95 ,47.00 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw816a87d5/crop/025144299_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g6 = new products("Gingham","Gift Box Set",39.95 ,22.00 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw850c06fd/crop/025144309_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g7 = new products("Eucalyptus Spearmint","Gift Set",37.95 ,43.99 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4a30d81a/crop/025144305_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g8 = new products("Pink Pineapple Sunrise","Single Wick Candle & Gentle Foaming Hand Soap Bundle",22.00 ,23.45 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22234b1a/crop/025145996_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g9 = new products("Bahamas Passionfruit & Banana Flower","Gift Bag Set",45.95 ,57.25 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe5e522f/hires/025143915_alt_1.jpg?sh=413&yocs=o_s_")
let g10 = new products("Noir","Body Spray & Hair, Face & Body Wash Bundle",24.25 ,25.55,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7fd8863a/crop/025143515_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g11 = new products("Champagne Toast","Mini Gift Set",14.95 ,18.25 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe3b15aab/crop/025143921_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g12 = new products("Pure Wonder","Gift Box Set",64.50 ,68.70 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw53853f3c/crop/025142116_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let g13 = new products("Butterfly","Mini Gift Box Set",17.50 ,22.50 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8503c596/hires/025144495_alt_1.jpg?sh=413&yocs=o_s_")
let g14 = new products("Champagne Toast","Gift Set",26.99 ,29.99 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw689f2df4/hires/025142118_alt_1.jpg?sh=413&yocs=o_s_")
let g15 = new products("Strawberry Pound Cake","Gift Bag Set",74.50 ,79.99 ,"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw223dfd14/hires/025143495_alt_1.jpg?sh=413&yocs=o_s_")

GiftShop.push(g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15)





GiftShop.forEach(({img,fname,type,price,description}) =>{

    let container = document.querySelector("#container_gift");

    let dib = document.createElement("div")
    dib.setAttribute("class","gift_div")

    let img_div = document.createElement("div")

    
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

    let types = document.createElement("p")
    types.innerText = type;
    types.style.fontSize = "13px"

    let prices = document.createElement("h3")
    prices.innerText = `$${price}`;

    let dis = document.createElement("p")
    dis.innerText = `$${description}`;
    dis.style.color = "red"
    dis.style.fontSize = "15px"
    dis.style.fontWeight = "bold"
    dis.style.textDecoration = "line-through"


   

    let btn = document.createElement("button")
    btn.setAttribute("id","gift_button")
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

     dib.append(img_div,name,types,prices,dis,btn,span1)
    container.append(dib)


    img_div.addEventListener("click",function(){
        DisplayPage({img,fname,type,price,description})
      
    })
   
});


let CartData = JSON.parse(localStorage.getItem("cart")) || [];
let Display = JSON.parse(localStorage.getItem("display")) || [];


let AddToBag = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    CartData.push({img,fname,type,price,description});
    localStorage.setItem("cart",JSON.stringify(CartData));
    window.location.href="../../cartpage/cart.html"
}


let DisplayPage = ({img,fname,type,price,description}) =>{
    //console.log({img,fname,type,price,description});
    Display.push({img,fname,type,price,description});
    localStorage.setItem("display",JSON.stringify(Display));
    window.location.href = "../../display/display.html"
}


import {container} from "../../homepage/components/navbar.js"
document.getElementById("navbar").innerHTML = container();

let cartData = JSON.parse(localStorage.getItem("cart"))||[];

var total = cartData.reduce(function (sum, elem, index, arr) {    return sum + Number(elem.price2);  }, 0);
  var length = cartData.length;   console.log(length);
var cartcoutup= document.querySelector("#usercart-items-display").innerText = `${length}`;

//--------------------------------------------------------------------------------------------------