const nextButton = document.querySelector(".next-button1");
const previousButton = document.querySelector("#previous-button");
const panel = document.querySelectorAll(".panel");
const next = document.querySelector(".nexter");
const next2 = document.querySelector(".nexter2");
// const input = document.querySelectorAll("textarea");
const list = document.querySelectorAll("li");
const input = document.getElementById("name");
const vision = document.getElementById("vision");
const empty = document.getElementById("empty");
const empty2 = document.getElementById("empty2");
const empty3 = document.getElementById("empty3");
const empty4 = document.getElementById("empty4");
const company = document.getElementById("company");
const project = document.getElementById("project");
const span = document.querySelectorAll(".tab");
const tabpanel = document.querySelector(".panel");

// const tabpanel2 = document.querySelector(".panel2");


let currentstep = 0;

showpanel();

// if(input.value == ""){
//     nextButton.setAttribute('disabled',true)
// }
// else{
//     nextButton.removeAttribute('disabled');
// }

next.onclick = () => {

 
    consolevalue();
    checkinput();
    valueincrease();
    showpanel();
    hidepanel();
    // checkinput2();
    // showpanel();
    // hidepanel();
    
    // consolevalue2();
    // checkinput2();
    // valueincrease2();
    
    // showpanel2();
   
    console.log(currentstep);

    
    

   
    // formonevalidation();
    // checkerror();
    
    //  colorchange();
     spanchange();
}
// next.onclick = () => {
//     checkinput2();
// }




previousButton.onclick = () => {
    
   
    hidepanel2();
    currentstep--;
    console.log(currentstep);
}

if(currentstep == 5){
    next.classList.add("d-none");
}


console.log(currentstep);

// switch (currentstep) {
//     case 0:
//         list[0].classList.add("change");
//         break;
//     case 1:
//         list[1].classList.add("change");
//         break;
//     case 2:
//         list[2].classList.add("change");
//         break;    
//     default:
//         list.style.color = "red";
// }

function showpanel(){
   
        panel[currentstep].classList.remove("d-none");
    list[currentstep].style.color = "blue";
    
   
    
}
function showpanel2(){
    if (currentstep = 1){
        console.log(project.value);
        console.log(company.value);
    }

    
}
function checker(){
    if(project.value ==""){
        next.setAttribute('disabled', true);
    }
    else{
        next.removeAttribute('disabled');
    }
}
function hidepanel(){
    panel[currentstep-1].classList.add("d-none");
    list[currentstep-1].style.color = "black";
    
}
function hidepanel2(){
    
    panel[currentstep].classList.add("d-none");
    panel[currentstep-1].classList.remove("d-none");
    list[currentstep].style.color = "black";
    list[currentstep-1].style.color = "blue";
    
}
function hidepanel3(){
    panel[currentstep].classList.add("d-none");
    panel[currentstep-1].classList.remove("d-none");
}
function formonevalidation(){

    if (input.value == "" && vision.value == ""){
        empty.classList.remove("d-none");
        empty2.classList.remove("d-none");
        
    } 
}
function checkerror(){
    if (empty.className == ""){
        next.setAttribute('disabled' ,false);
    }

    else{
        next.setAttribute('disabled' ,true);
    }
}
function disablebutton(){
    if(input.value ==""){
        next.setAttribute('disabled' ,true);
    }
    else{
        next.setAttribute('disabled' ,false);
    }
}
function consolevalue(){


    console.log(input.value);
    console.log(vision.value);
}
function consolevalue2(){

    if (currentstep == 1){

        console.log(company.value);
    console.log(project.value);
    
    }
    
}

function checkinput(){
    if(input.value ==""){
        empty.classList.remove("d-none");
    }
    if(vision.value ==""){
        empty2.classList.remove("d-none");
    }
    if(input.value !==""){
        empty.classList.add("d-none");
    }
    if(vision.value !==""){
        empty2.classList.add("d-none");
    }
}
function checkinput2(){

    if(company.value ==""){
        empty3.classList.remove("d-none");
        currentstep = 1;
        
    }
    if(project.value == ""){
        empty4.classList.remove("d-none");
        currentstep = 1;
    }
   
 
        if(company.value !=="" && project.value !==""){
            empty3.classList.add("d-none");
            empty4.classList.add("d-none");
            currentstep +=1;
        }
       
        
    
    

   

        
    
    
}

function valueincrease(){
    if(input.value !=="" && vision.value !==""){
        currentstep = 1;
       
    }
    if(input.value =="" || vision.value ==""){
        currentstep =0;
    }
    
}
function valueincrease2(){

    
        if(company.value !=="" && project.value !==""){
            currentstep +=1;
           
        }
        if(company.value =="" || project.value ==""){
            currentstep =1;
        }
    
    
    
}
function spanchange(){
    span[currentstep-1].innerHTML = `<i class="fas fa-check"></i>`;
    span[currentstep-1].style.color = "white";
    span[currentstep-1].style.backgroundColor = "green";
    span[currentstep-1].style.paddingTop = "10px";
}
//  function colorchange(){
//      switch (currentstep) {
//      case 0:
//         list[0].style.color = "blue";
       
//             case 1:
//                 list[0].style.color = "black";
                
//                 case 2:
//             list[2].style.color = "blue";
            
//             case 3:
//             list[3].style.color = "blue";
            

//         default:
//             list[3].style.color = "black";
//     }}
    
    
// }
// function colornotchange(){

// }

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
         checkboxes.forEach((item) => {
             if (item !== checkbox) item.checked = false
         })
     }

     


// nextButton.onclick = () => {

//     // tabpanel.classList.add("d-none");
//     // tabpanel2.classList.remove("d-none");
// }

// previousButton.onclick = () => {

//     // tabpanel2.classList.add("d-none");
//     // tabpanel.classList.remove("d-none");
// }


   
// function set(){
//     if (input.vasqlue !="") {
//         nextButton.setAttribute('disabled', true)
        
//       } else {
//         nextButton.setAttribute('disabled', false);
        
//       }
// }
   
// set();
// if (input.value !=="") {
//     nextButton.setAttribute('disabled', false)
// }
// if (input.value === "oo") {
//     nextButton.setAttribute('disabled', true)
// }



   



 
    
  

 
// let form1 = document.querySelector(".form-1");
// let form2 = document.querySelector(".form-2");
// let form3 = document.querySelector(".form-3");
// let form4 = document.querySelector(".form-4");
// let form5 = document.querySelector(".form-5");
// let form6 = document.querySelector(".form-6");
// let nextBtn = document.querySelector(".sign-button");
// let prevBtn = document.querySelector(".prev-button");
// let nextBtn2 = document.querySelector(".next-button");
// let prevBtn2 = document.querySelector(".prev-button2");
// let nextBtn3 = document.querySelector(".next-button2");
// let prevBtn3 = document.querySelector(".prev-button3");
// let nextBtn4 = document.querySelector(".next-button3");
// let prevBtn4 = document.querySelector(".prev-button4");
// let subBtn = document.querySelector(".submit-button");
// let errorMsg = document.getElementById("span");
// let input = document.querySelector(".inputs");



// // if(hasError = false){
// //     errorMsg.style.display = "none";
// // }
// // if(hasError = true){
// //     errorMsg.style.display = "block";
// // }


// // hasError = false;

    
//     if(input.value == null){
//         errorMsg.innerHTML = "invalid";
//     }
    
    




// nextBtn.onclick  = () => {
//     form2.classList.remove("no-display");
//     form1.classList.add("no-display");
    
// }




// prevBtn.onclick  = () => {
//     form1.classList.remove("no-display");
//     form2.classList.add("no-display");
    
    
// }

// nextBtn2.onclick  = () => {
//     form3.classList.remove("no-display");
//     form2.classList.add("no-display");   
// }
// prevBtn2.onclick  = () => {
//     form3.classList.add("no-display");
//     form2.classList.remove("no-display");   
// }
// nextBtn3.onclick  = () => {
//     form4.classList.remove("no-display");
//     form3.classList.add("no-display");   
// }
// prevBtn3.onclick  = () => {
//     form4.classList.add("no-display");
//     form3.classList.remove("no-display");   
// }
// nextBtn4.onclick  = () => {
//     form5.classList.remove("no-display");
//     form4.classList.add("no-display");   
// }
// prevBtn4.onclick  = () => {
//     form5.classList.add("no-display");
//     form4.classList.remove("no-display");   
// }
// subBtn.onclick  = () => {
//     form5.classList.add("no-display");
//     form6.classList.remove("no-display");   
// }


// function onlyOne(checkbox) {
//     var checkboxes = document.getElementsByName('check')
//     checkboxes.forEach((item) => {
//         if (item !== checkbox) item.checked = false
//     })
// }
























