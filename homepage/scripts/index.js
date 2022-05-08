
import {container} from "/bath-and-body-works-2/homepage/components/navbar.js";

let box = document.querySelector("#srinivas-container");
box.innerHTML = container();


// ************************************2 carousel parts************************************
const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

const productContainer = document.querySelectorAll('.image-container');
const nxtBtn1 = document.querySelectorAll('.nxt-btn1');
const preBtn1 = document.querySelectorAll('.pre-btn1');

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// ************************************2 carousel part ends************************************

// ********************************hovering dropdown section****************************************

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



let images_Arr = ["https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4bac64f2/images/Spring2022/595blbc_sp3_hm_to.gif?yocs=s_",
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8a216658/images/Spring2022/iso-pwp_sp3_hm_lto.jpg?yocs=s_",
            "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw202e39b4/images/Spring2022/12953w_sp3_hm_lto.gif?yocs=s_"];


let images_div = document.querySelector("#mothersday_image-div");
let i=0;

function slideShow () {
    let img = document.createElement("img");
    img.setAttribute("class", "first-image-tag");
    
    setInterval(() => {
        if(i===images_Arr.length){
            i=0;
        }

        img.src = images_Arr[i];

        images_div.append(img);

        i++;

    },3000)
}

slideShow();

// moving to different page**************************************

let refreshMe = () => {
    window.location.reload();
}
let anchor = document.querySelector("#anchor-tag-auto-refresh").addEventListener("click", refreshMe);
let refresh = document.querySelector("#footer-auto-refresh").addEventListener("click", refreshMe);

let redirectCart = () => {
    window.location.href = "cart.html";
}
let cart = document.querySelector("#userCart-div").addEventListener("click", redirectCart);
document.querySelector(".addtoBag-btn").addEventListener("click", redirectCart)

// *****************ends***********



// clicking on input *******************************

let displayDiv = () => {
    let show = document.querySelector(".dropdown-content-input");
    show.style.display = "block";
    // let bodys = document.querySelector("#only-body");
    // bodys.style.zindex = -20;
}
let input = document.querySelector(".input").addEventListener("click", displayDiv);

let removeDisplay = () => {
    let remove = document.querySelector(".dropdown-content-input");
    remove.style.display = "none";
    // let bodys = document.querySelector("#only-body");
    // bodys.style.opacity = 1;
}
document.querySelector("#product-container").addEventListener("click", removeDisplay);



// social media redirecting*******************

let toFB = () => {
    window.location.href = "https://www.facebook.com/bathandbodyworks/";
}
let toTwitter = () => {
    window.location.href = "https://twitter.com/bathbodyworks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
}
let toInsta = () => {
    window.location.href = "https://www.instagram.com/bathandbodyworks/?hl=en";
}
let toTictok = () => {
    window.location.href = "https://www.tiktok.com/@bathandbodyworks?lang=en";
}
let toYoutube = () => {
    window.location.href = "https://www.youtube.com/user/bathandbodyworks";
}
let toPinterest = () => {
    window.location.href = "https://in.pinterest.com/bathbodyworks/_created/";
}

document.querySelector(".social-media-iconsF").addEventListener("click", toFB);
document.querySelector(".social-media-iconsT").addEventListener("click", toTwitter);
document.querySelector(".social-media-iconsi").addEventListener("click", toInsta);
document.querySelector(".social-media-iconst").addEventListener("click", toTictok);
document.querySelector(".social-media-iconsy").addEventListener("click", toYoutube);
document.querySelector(".social-media-iconsp").addEventListener("click", toPinterest);



// let cartData = JSON.parse(localStorage.getItem("cart"))||[];
// var total = cartData.reduce(function (sum, elem, index, arr) {    return sum + Number(elem.price2);  }, 0);
//   var length = cartData.length;   console.log(length);
// var cartcoutup= document.querySelector("#usercart-items-display").innerText = `${length}`;



















{/* <div class="newandnow-dropdown">NEW & NOW
                  <div id="new-and-now">
                    <div id="left">
                      <p>NEW & NOW</p>
                      <p>EXPLORE NEW & NOW</p>
                    </div>
                    <div id="right">
                      <p>New Arrivals</p>
                      <p>Men's Shop</p>
                      <p>Laundry Fragrances</p>
                      <p>Best Sellers</p>
                      <p>Aromatherapy Shop</p>
                    </div>
                  </div>
                </div>
                <li class="bodycare-dropdown">BODY CARE</li>
                <li class="soap-dropdown">HAND SOAPS & SANITIZERS</li>
                <li class="fragrance-dropdown">HOME FRAGRANCE</li>
                <li class="gifts-dropdown">GIFTS</li>
                <li class="topoffer-dropdown">TOP OFFERS</li> */}







              
                