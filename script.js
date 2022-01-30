// See if js connected to html
const hello = "Hello There!"
console.log(hello);


//Selecting Error Text under input (smalls)
const small = document.getElementById("emailWrong");

//Selecting btn
const btn = document.getElementById("notiBtn");

// Email validation func
function isValid(){
    let email = document.getElementById("inputEmail").value; 
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)){
        small.classList.add("d-flex");
        document.getElementById("inputEmail").style.borderColor = "hsl(354, 100%, 66%)";
    }
    else{
        small.classList.remove("d-flex");
        document.getElementById("inputEmail").style.borderColor = "#ced4da";
        
    }
}
// Checking the view size and if is less then 992px give margo to button if error show up. 
function myFunction(x) {
    if (x.matches && small.classList.contains("d-flex")) { // If media query matches
      btn.style.marginTop = "2rem";
    } else {
        btn.style.marginTop = "0";
    }
  }
  
  

function isValid(){
    let email = document.getElementById("inputEmail").value; 
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)){
        small.classList.add("d-flex");
        document.getElementById("inputEmail").style.borderColor = "hsl(354, 100%, 66%)";
    }
    else{
        small.classList.remove("d-flex");
        document.getElementById("inputEmail").style.borderColor = "#ced4da";
        
    }
}


// Empty inputs show error also
function isEmpty(){ 
    let email = document.getElementById("inputEmail").value; 
        if(email.length == 0){
            small.classList.add("d-flex");  
            document.getElementById("inputEmail").style.borderColor = "hsl(354, 100%, 66%)";
        }
        else{
            small.classList.remove("d-flex");  
            document.getElementById("inputEmail").style.borderColor = "#ced4da";
        }
        isValid() 
        var x = window.matchMedia("(max-width: 992px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes 
    }
    