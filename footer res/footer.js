import  {down} from "/bathandbodyworks/footer res/script/myfooter.js";
let contain = document.querySelector(".footer");
contain.innerHTML = down();


let footer_click = () => {

    let b = document.querySelector("#footer_confirm").value
    if(b===""){
       
      let show =  document.querySelector("#show2");
      show.innerHTML = "this field is required.";
      show.style.color = "red"
    }
}

