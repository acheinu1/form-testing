
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
// const mainform = document.querySelector(".field");
// const progressbar = document.querySelectorAll(".progress-bar")
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// the dom==========================
// let fullname= document.getElementById("fname").value.trim();
// let gender= document.getElementById("gender").value.trim();
// let email= document.getElementById("email").value.trim();
// let number= document.getElementById("number").value.trim();
// let address= document.getElementById("address").value.trim();
// let date= document.getElementById("date").value.trim();
// let marital= document.getElementById("marital").value.trim();
let course= document.getElementById("course").value.trim();
let mainform = document.querySelector(".field");

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  let fullname= document.getElementById("fname").value.trim();
  let gender= document.getElementById("gender").value.trim();

  
  // validate fullname & gender ==============
    if( fullname.length == null || fullname == ""){ 
      alert("fullname cant be blank")
        return false;
    }
    else if(fullname.length < 5){
      document.getElementById("error1").innerHTML = "* must be more than five letters";
      return false;
    }
    else if((!isNaN(fullname))){
      document.getElementById("error1").innerHTML = "* full name cant be in numbers";
      return false;
    }
    else if(gender == "select your gender") { 
     document.getElementById("error2").innerHTML = "* please select your gender";
     return false;
    }else{
      slidePage.style.marginLeft = "-25%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    }
});

// ================the second page==========================
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  let email= document.getElementById("email").value.trim();
  let number= document.getElementById("number").value.trim();
  let address= document.getElementById("address").value.trim();

  // validate the email, phonenumber and address=============
  // validate email =================
  if ((email == "") || email.length == null){ 
    document.getElementById("error3").innerHTML = "* email can't be blank";
    return false;   
  }
  else if ((email.indexOf('@') <= 0)){ 
    document.getElementById("error3").innerHTML = "* please submit a valid email";
    return false;   
  }
  else if((number == " " ) || (isNaN(number)) || number.length != 11){
    document.getElementById("error4").innerHTML = "* please enter a valid phonenumber";
    return false; 
    }
  else if( address.length == null || address.length == ' ' || address.length < 5  || (!isNaN(address))){ 
      document.getElementById("error5").innerHTML = "* Address cant less than 5 letters";
      return false;
    }
  else{
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  }
});

// ================third page==================================================
nextBtnThird.addEventListener("click", function(event){
let date= document.getElementById("date").value.trim();
let marital= document.getElementById("marital").value.trim();

// validate the date=============
// validate date =========================================
  if ( date.length == null || date.length == ' ' || date.length < 5 ){ 
    document.getElementById("error6").innerHTML = "* please submit a valid date of birth";
    return false;   
  }
  else if(marital == "select your Marital status") { 
    document.getElementById("error7").innerHTML = "* please select your marital status";
    return false;
  }
  else{
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});


// ================fourth page==================================================
submitBtn.addEventListener("click", function(event){
  event.preventDefault()
  let course= document.getElementById("course").value.trim();
  let Knowledge= document.getElementById("Knowledge").value.trim();

  if(Knowledge == "any prior knowlegde of forex ?") { 
    document.getElementById("error8").innerHTML = "* please select one option";
    return false;
  }
  else if(course == "choose your learning schedule") { 
    document.getElementById("error9").innerHTML = "* please select your preferred learning schedule";
    return false;
  }
  else{
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    // alert("Your Form Successfully Registered");
    // location.reload();
  },2000);
  
  }
  
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('.error');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }
// if( fullname.length == null || fullname == ""){ 
//   document.getElementById("error1").innerHTML = "* must be more than five letters";
//     return false;
// }
