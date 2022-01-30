// See if js connected to html
const hello = "Hello There!"
console.log(hello);


//Selecting Error Text under input (smalls)
const small = document.getElementById("emailWrong");




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
    }
    
