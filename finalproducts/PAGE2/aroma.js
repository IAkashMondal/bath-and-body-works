
let Aromatherapy = [];


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
 let a2 = new products("Lavender Vanilla","Ultimate Hydration Body Cream", 16.50,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dweab7023b/crop/026353222_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a3 = new products("Black Chamomile","Pillow and Body Mist",14.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf48f3eef/crop/026353233_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a4 = new products("Eucalyptus Spearmint","Bath Soak",18.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa393dab9/crop/026353262_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a5 = new products("Orange Ginger","Gentle & Clean Foaming Hand Soap",7.50 ,"Mix & Match: 6/$27 or 4/$20","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2455126b/crop/026410945_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a6 = new products("Eucalyptus Spearmint","Moisturizing Body Wash",15.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1b5146ea/crop/026353240_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a7 = new products("Eucalyptus Spearmint","Body Wash and Foam Bath",14.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22111d6f/crop/026353200_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a8 = new products("Eucalyptus Spearmint","Essential Oil Mist",14.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd7bab2f1/crop/026353230_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a9 = new products("Hibiscus Mandarin Violet","Ultimate Hydration Body Cream",17.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbfc18541/crop/026401907_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a10 = new products("Pineapple Lime Eucalyptus","Ultimate Hydration Body Cream",17.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw405fd62d/crop/026401906_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a11 = new products("Pineapple Lime Eucalyptus","Body Wash and Foam Bath",15.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwaa9a590e/crop/026400298_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a12 = new products("Hibiscus Mandarin Violet","Body Wash and Foam Bath",15.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw77031493/crop/026400299_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a13 = new products("Sandalwood Eucalyptus Mandarin","Ultimate Hydration Body Cream",17.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb37ec169/crop/026403500_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a14 = new products("Sandalwood Eucalyptus Mandarin","Body Wash and Foam Bath",15.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")
let a15 = new products("Pineapple Lime Eucalyptus","Moisturizing Body Lotion",16.50 ,"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free","https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe8bc2c4c/crop/026401902_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_")

Aromatherapy.push(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15)





// let CartData = JSON.parse(localStorage.getItem("bag")) || [];
// let Display = JSON.parse(localStorage.getItem("display")) || [];

Aromatherapy.forEach(({img,fname,type,price,description}) =>{

    let container = document.querySelector("#container_Aroma");

    let dib = document.createElement("div")
    dib.setAttribute("class","Aroma_div")

    

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
    btn.setAttribute("id","Aroma_button")
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
