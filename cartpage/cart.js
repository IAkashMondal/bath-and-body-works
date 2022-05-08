
// // <--------------------------------------------------- NAVRBAR  IMPORT STRAT HERE -------------------------------------------->


import {container} from "../../bath-and-body-works-2/homepage/components/navbar.js"
document.getElementById("navbar").innerHTML = container();

import  {down} from "../../bath-and-body-works-2/footer res/script/myfooter.js";
let contain = document.querySelector(".footer");
contain.innerHTML = down();
// // <--------------------------------------------------- NAVBAR IMPORT END HERE ------------------------------------------------>


// -----------hovs---------
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


// // <--------------------------------------------------- DATA FETCHING  STRAT HERE --------------------------------------------->

let MyProducts1 =[]
let MyProducts2 =[]

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

MyProducts1.push(a1,a2,a3,a4) ;
MyProducts2.push(a5,a6,a7,a8) ;



// // <--------------------------------------------------- DATA FETCHING  END HERE --------------------------------------------->


// // <--------------------------------------------------- Localstorage is start HERE --------------------------------------------->

let cartData = JSON.parse(localStorage.getItem("cart"))||[];
let wishData = JSON.parse(localStorage.getItem("wish"))|| [];  


// // <--------------------------------------------------- Localstorage is  END HERE --------------------------------------------->



// // <--------------------------------------------------- APPENDING START HERE --------------------------------------------------->

// ****************************************PRODUCTS MAPING FOR SUGESSION BOX 1*************************************************

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

// ****************************************PRODUCTS MAPING FOR SUGESSION BOX 2*************************************************

MyProducts2.forEach(({img,fname,type,price,description}) =>{

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
    document.querySelector(".suggestion2").append(box) ;
}) ;

// ****************************************PRODUCTS MAPING FOR CART *************************************************

cartData.map(function (elem, index) {

    let box = document.createElement("tr");
    box.setAttribute("id","tr_box")
    
    let items1 = document.createElement("div")
    items1.setAttribute("id","conitem")
    
    let img = document.createElement("img");
    img.setAttribute("id","suggestion_img")
        img.src = elem.img;
        img.style.marginRight="10%"
    
    let items2 = document.createElement("div")
        items2.setAttribute("id","item2")
        
    
    let name = document.createElement("p");
    name.setAttribute("id","itemname")
        name.textContent = elem.fname ;

    let des = document.createElement("p");
    des.setAttribute("id","itemdes")
        des.textContent = elem.description ;

    let offer = document.createElement("p");
    offer.setAttribute("id","offer")
        offer.textContent = elem.offer ;

    let promo = document.createElement("p");
    promo.setAttribute("id","promo")
        promo.textContent = "Promotional details";
    
    
    let btnwish = document.createElement("button")
    btnwish.setAttribute("class","cartwish")
        btnwish.innerText="❤️"+"Add to My Love-It list"
        btnwish.addEventListener("click",function (){
            addToWishlist(elem)
        });
    
    let pri = document.createElement("td");
    pri.setAttribute("id","net") ;
        pri.innerText = "$"+ elem.price;  
    
    
    let qty = document.createElement("td");

    let qtydiv = document.createElement("div");
    qtydiv.setAttribute("id","qtydiv")
    
    let btnmins =document.createElement("button")
    btnmins.setAttribute("id","minscount")
        btnmins.innerText= "−"
        btnmins.addEventListener("click",function(){
        displaycount.innerText= count--
      
    });
          
    let displaycount = document.createElement("div")
    displaycount.setAttribute("class","displayMe")
        displaycount.innerText =  1 ;
      
          
    
    let btnplus  =document.createElement("button")
    btnplus.setAttribute("id","pluscount")
        btnplus.innerText= "+"
        btnplus.addEventListener("click",function(){
        displaycount.innerText=count++;
    
       });
    
    let available = document.createElement("p");
    available.setAttribute("id","promoew")
        available.textContent = "Available";
        
    let grosstotal = document.createElement("td");
    
    let devsec= document.createElement("dic");
    devsec.setAttribute("id","devsec")
        grosstotal.setAttribute("id","gross") ;
        grosstotal.innerText= "$"+ elem.price;

    let rbtn = document.createElement("button");
    rbtn.setAttribute("id","Remove-th")
        rbtn.innerText = "X";
        rbtn.addEventListener("click", function () {
            removeItem(elem, index);
        });
    
     
//    appending--------------here------------------>
    
    qtydiv.append(btnmins,displaycount,btnplus)
    qty.append(qtydiv,available)
    items2.append(name,des,offer,promo,btnwish)
    items1.append(img,items2)
    devsec.append(grosstotal,rbtn)
    box.append(items1,pri,qty,devsec );
    document.querySelector("#Cartbody").append(box);
});

// // <--------------------------------------------------- APPENDING ENDS HERE --------------------------------------------------->


// // <---------------------------- FUNCTIONS AddToCart/AddToWishlist/Outlook/CountPlus/CountLess START HERE----------------------->

// ************************************addTocart***********************************************

function addTocart(ele){
    var products= JSON.parse(localStorage.getItem("cart")) || []; //cart
    console.log(ele)
    products.push(ele)
    localStorage.setItem("cart",JSON.stringify(products))
    window.location.reload()

}

// ************************************addToWISHlist***********************************************

function addToWishlist(ele){
           
    var wishData= JSON.parse(localStorage.getItem("wish")) || []; //cart
    console.log(ele)
    wishData.push(ele)
    localStorage.setItem("wish",JSON.stringify(wishData))
    window.location.reload()
          
}

// ************************************QUICKLOOK- with - dispaypage function***********************************************

function QUICKLOOK(ele){
    let display = [];
    display.push(ele)
    localStorage.setItem("display",JSON.stringify(display))
    window.location.href="../display/display.html"

}

// ************************************CountPlus***********************************************   

var count = 0;

function countplus(_elem){

    count++ ;
    console.log(count,"c+");
}

// ************************************COUNTMINUS***********************************************   

function countless (_elem){

    count-- ;
    console.log(count,"c-");
}

// *************************************RemoveItem**********************************************   

function removeItem(elem, index) {

    count-- ;
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
    
  }


// // <--------------------------------------------------- APPENDING END HERE ----------------------------------------------------->




// // <--------------------------------------------------- COUPON  AND DISCOUNT START HERE --------------------------------------------------->
 
let Discoun = async (e) => {
    event.preventDefault
   let coupon = document.querySelector("#discount").value ;

   if((coupon == "Masai30" )||(coupon == "masai30" )){

    var discop = Number(Math.round((total*30)/100))
    console.log(discop,"discount coupon")
    let ORDER_TO=  Math.ceil(ORDER_TOTAL - discop)

    var less =   document.querySelector("#Discount").innerText="-$"+ discop;
    var totaldis = document.querySelector("#MERCHANDISE_SUBTOTAL").innerText = "$"+  total;
    var ESTIMATEDdis = document.querySelector("#ESTIMATED").innerText ="$"+  ESTIMATED;
    var SALES_TAXdis = document.querySelector("#SALES_TAX").innerText ="$"+  SALES_TAX;
    var totaORDER_TOTALdis = document.querySelector("#ORDER_TOTAL").innerText ="$"+ ORDER_TO;
 
   

    swal({
        title: "Hurray!",
        text: " You Got 30% Discount on "+"\n"+"\n"+"     Merchandise   Subtotal",
        icon: "success",

      });

   }
    else{
        document.querySelector("#discount").value= null 
        sweetAlert("Invalid Coupon code", "Coupon code: Masai30"+"\n"+"   Coupon code: masai30", "error");
        SweetAlert.fire(
        'The Internet?',
        'That thing is still around?',
        'question',
        ) 
    }
   

}
document.getElementById("discount_coupon").addEventListener("click",Discoun);


// // <--------------------------------------------------- COUPON AND DISCOUNT END HERE ----------------------------------------------------->



 // <--------------------------------------------------- BUTTON FUNCTION START HERE -------------------------------------------------------------->

// ********************************checkout1 Paymentpage-1*********************************************

let checkout1 = async (e) => {
   
    window.location.href="../payment page/pay.html"

    
};
document.getElementById("checkoutbag1").addEventListener("click", checkout1);

// ********************************checkout2 Paymentpage-2*********************************************

let checkout2 = async (e) => {
   
    window.location.href="../payment page/pay.html"

    
};
document.getElementById("checkoutbag2").addEventListener("click", checkout2);

// ***********************************Updatebag******************************************

let reload1= async (e) => {
   
    window.location.reload();

    
};
document.getElementById("Updatebag").addEventListener("click", reload1);

    
// <--------------------------------------------------- BUTTON FUNCTION END HERE -------------------------------------------------------------->



//   <---------------------------------Calculation Start HERE------------------------------------------------------>

 var total = cartData.reduce(function (sum, elem, index, arr) {
   return sum + Number(elem.price);
 }, 0);

 var length = cartData.length; 

 let ESTIMATED = Number((length*2.50))

 let SALES_Total= Number((total)+(ESTIMATED))
 let SALES_TAX = Number(Math.round((SALES_Total*10)/100))


 let ORDER_TOTAL = Number(total)+ Number(ESTIMATED)+ Number(SALES_TAX)

 let ORDER_= Number(total)+ Number(ESTIMATED)+ Number(SALES_TAX)

 
//   <---------------------------------Calculation ENDS HERE------------------------------------------------------>



//  <---------------------------------------Display Calculation Start HERE------------------------------------------------------->

 var cartcoutup= document.querySelector("#Bagcount").innerText = `${length}`
 var cartcoutup= document.querySelector("#usercart-items-display").innerText = `${length}`
 var totaldis = document.querySelector("#MERCHANDISE_SUBTOTAL").innerText = ` $${total}`;
 var ESTIMATEDdis = document.querySelector("#ESTIMATED").innerText = ` $${ESTIMATED}`;
 var SALES_TAXdis = document.querySelector("#SALES_TAX").innerText = ` $${SALES_TAX}`;
 var totaORDER_TOTALdis = document.querySelector("#ORDER_TOTAL").innerText = ` $${ORDER_}`;

//  <---------------------------------------Display Calculation ENDS HERE------------------------------------------------------->







// <-----------------------------------------paypal-------------------->



 

// cartData.map(function (elem, index) {

//     let box = document.createElement("tr");
//     box.setAttribute("id","tr_box")
//     //    ------------1-----------
//       var items1 = document.createElement("div")
//           items1.setAttribute("id","conitem")
    
//     var img = document.createElement("img");
    
    
//     img.setAttribute("id","suggestion_img")
//     img.src = elem.image;
//     img.style.marginRight="10%"
    
//     var items2 = document.createElement("div")
//           items2.setAttribute("id","item2")
    
    
//     let name = document.createElement("p");
//       name.setAttribute("id","itemname")
//     name.textContent = elem.titel;
//     let des = document.createElement("p");
//       des.setAttribute("id","itemname")
//     des.textContent = elem.description;
//     let offer = document.createElement("p");
//       offer.setAttribute("id","offer")
//     offer.textContent = elem.offer;
//     let promo = document.createElement("p");
//       promo.setAttribute("id","promo")
//     promo.textContent = "Promotional details";
    
    
//     let btnwish = document.createElement("button")
//           btnwish.setAttribute("class","cartwish")
//             btnwish.innerText="❤️"+"Add to My Love-It list"
//             btnwish.addEventListener("click",function (){
//                   addToWishlist(elem)
//               });
    
//     // -------------td2--------------------
    
    
//     var price = document.createElement("td");
//     price.innerText = elem.price1;
//     price.setAttribute("id","net") ;
    
//     // -------------td3--------------------
//     let qty = document.createElement("td");
//     let qtydiv = document.createElement("div");
//     qtydiv.setAttribute("id","qtydiv")
    
    
    
    
//       // minus- start here------->
    
    
//       var btnmins  = document.createElement("button")
//           btnmins.setAttribute("id","minscount")
//           btnmins.innerText= "−"
//           btnmins.addEventListener("click",function(){
//            displaycount.innerText= count--
      
//     });
          
    
//       var displaycount = document.createElement("div")
//           displaycount.setAttribute("class","displayMe")
//           displaycount.innerText =  1 ;
      
          
    
//           var btnplus  =document.createElement("button")
//           btnplus.setAttribute("id","pluscount")
//           btnplus.innerText= "+"
//           btnplus.addEventListener("click",function(){
//            displaycount.innerText=count++;
    
//        });
       
    
    
//           // minus endshere-------------------------->
    
//        let available = document.createElement("p");
//        available.setAttribute("id","promo")
//        available.textContent = "Available";
        
    
//     // -----------------------totalprice-------------------------------
          
    
//     let grosstotal = document.createElement("td");
    
//     let devsec= document.createElement("dic");
//       devsec.setAttribute("id","devsec")
//       grosstotal.setAttribute("id","gross") ;
    
//       grosstotal.innerText= "$"+ elem.price2;
    
//       console.log(grosstotal,displaycount.innerText) 
    
    
    
//       let rbtn = document.createElement("button");
//           rbtn.innerText = "X";
//           rbtn.setAttribute("id","Remove-1")
    
//           rbtn.addEventListener("click", function () {
//             removeItem(elem, index);
//           });
    
     
//     //    appending--------------here------------------>
    
//     qtydiv.append(btnmins,displaycount,btnplus)
//     qty.append(qtydiv,available)
//     items2.append(name,des,offer,promo,btnwish)
//     items1.append(img,items2)
//     devsec.append(grosstotal,rbtn)
//     box.append(items1,price,qty,devsec );
//     document.querySelector("#Cartbody").append(box);
    
    
//     });
    //   Remove function & data added for next page-------------------------------------------------------------->

//  function removeItem(elem, index) {

//     count-- ;
//     console.log(elem, index);
//     cartData.splice(index, 1);
//     console.log(cartData);
//     localStorage.setItem("cart", JSON.stringify(cartData));
//     window.location.reload();
    
//   }