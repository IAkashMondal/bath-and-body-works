let ShopCandle = [];

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

let p1 = new products("Iced Lemon Pound Cake","3-Wick Candle",26.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwad70deb6/crop/026467605_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p2 = new products("Raspberry Mimosa","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw70e74edd/crop/026480790_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p3 = new products("Strawberry Pound Cake","3-Wick Candle",24.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc7392bfd/crop/026458600_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p4 = new products("Honeysuckle & Peach Spritz","Single Wick Candle",15.50,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw58ab0cad/crop/026480467_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p5 = new products("Coastal Watermelon","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f23f750/crop/026482403_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p6 = new products("Fresh Cut Lilacs","3-Wick Candle",24.50 ,"","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc9985836/crop/026458601_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p7 = new products("Japanese Cherry Blossom","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2fb6a62e/crop/026468838_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p8 = new products("Waikiki Beach Coconut","3-Wick Candle",26.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7ba36a12/hires/026441623_alt_1.jpg?sh=413&yocs=o_s_");
let p9 = new products("Champagne Toast","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa5dea731/crop/026437366_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p10 = new products("Mahogany Teakwood","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdfe0df3d/crop/026437376_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p11 = new products("Eucalyptus Spearmint","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfdf75f06/crop/026426977_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p12 = new products("The Perfect Summer","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw02c8940e/crop/026517154_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p13 = new products("Fresh Cut Lilacs","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw257db0ed/crop/026480789_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p14 = new products("Lavender Vanilla","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw018cbcb6/crop/026437372_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");
let p15 = new products("Pink Pineapple Sunrise","Single Wick Candle",15.50 ,"Mix & Match: 2/$22","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3a3f2729/crop/026448739_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_");

ShopCandle.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15);


ShopCandle.forEach(({img,fname,type,price,description}) =>{

    let container = document.querySelector("#container_candle");

    let dib = document.createElement("div")
    dib.setAttribute("class","candle_div")

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

    let descriptions = document.createElement("p")
    descriptions.innerText = description;
    descriptions.style.color = "red"
    descriptions.style.fontSize = "11px"


  

    let btn = document.createElement("button")
    btn.setAttribute("id","candle_button")
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