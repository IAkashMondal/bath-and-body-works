let CollaseSign = document.getElementById("CollaseSign");

let SignContainerBoxJavascript = document.getElementById("SignContainerBoxJavascript");
SignContainerBoxJavascript.style.display = "none";

let prudumdisplay = document.getElementById("sectionsign2");

CollaseSign.addEventListener("click",()=>{
    
    //  let sing1 = SignContainerBoxJavascript.style.display= "none";

    if(SignContainerBoxJavascript.style.display === "block"){
        document.getElementById("SignContainerBoxJavascript").style.display="none";
        CollaseSign.classList.add("fa-angle-up");
        CollaseSign.classList.add("fa-angle-down");
        console.log("none");
    }
    else if(SignContainerBoxJavascript.style.display === "none"){
        document.getElementById("SignContainerBoxJavascript").style.display="block";
        CollaseSign.classList.remove("fa-angle-up");
        CollaseSign.classList.add("fa-angle-down");
   console.log("display")
    }  
})


/************************** */
let showpassword = document.getElementById("showpassword");
let passwordoutput = document.getElementById("passwordoutput");
showpassword.addEventListener("click",()=>{

        if(showpassword.innerHTML == "SHOW"){
            passwordoutput.type="text"

            showpassword.innerHTML = "HIDE";
            
        }
        else if(showpassword.innerHTML == "HIDE"){
            passwordoutput.type="password";

            showpassword.innerHTML = "SHOW";
            
        }

       

})



document.getElementById("step1").classList.add("border");
document.getElementById("step1").style.borderColor="blue";
document.getElementById("step1").style.color="blue";
    
let go_billing=document.getElementById("go_to_btn");
go_billing.addEventListener("click",function(){
    let requredFilled =  document.querySelector(".requiredfilled").value;
    if(requredFilled == ""){
        alert("Fill up the details")
    }
    else{
        url = "./billing.html"
        window.open(url);
    }

})


function colorchange(){
    
    document.getElementById("step22").classList.add("border");
        document.getElementById("step22").style.color= "green";
        document.getElementById("step22").style.borderColor= "green";
        document.querySelector(".line11").style.background="blue"
        document.querySelector(".line11").style.height="2PX"
        document.getElementById("step11").style.background="blue"
        document.getElementById("step11").style.color="white"
}




