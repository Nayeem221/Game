let one = document.querySelector(".one");
let input1 = document.querySelector(".one input");
let button1 = document.querySelector(".one button");
let error1 = document.querySelector(".one span");
let two = document.querySelector(".two");
let heading2 = document.querySelector(".two h2");
let input2 = document.querySelector(".two input");
let button2 = document.querySelector(".two button");
let error2 = document.querySelector(".two span");
let three = document.querySelector(".three");
let button3 = document.querySelector(".three button");
let error3 = document.querySelector(".three span");
let input3 = document.querySelector(".three input");
let four = document.querySelector(".four");
let input4 = document.querySelector(".four input");
let button4= document.querySelector(".four button");
let error4 = document.querySelector(".four span");
let heading4 = document.querySelector(".four h2");
let five = document.querySelector(".five");
let result = document.querySelector(".five h2");
let pl1value = document.querySelector(".five p");
let count=5;
let count4 = document.querySelector(".four p");


button1.addEventListener("click", function(){
    if(input1.value== ""){
        error1.innerHTML="please enter your name!! "
    }else{
       one.style.display="none"
       two.style.display="flex"
       heading2.innerHTML=input1.value;
    }
    
})

button2.addEventListener("click", function(){
   if(input2.value ==""){
    error2.innerHTML=("please enter  a number between 0-9")
   }
   else if(input2.value>=0 && input2.value<=9 ){
two.style.display="none";
three.style.display="flex"
   }else{
    error2.innerHTML=("please enter  a number between 0-9")
   }

})
button3.addEventListener("click",function(){
    if(input3.value ==""){
        error3.innerHTML=("enter your name ")
    }else{
        three.style.display="none"
        four.style.display="flex"
        heading4.innerHTML=`${input3.value} guess the number between 0-9 `
    }
})
button4.addEventListener("click",function(){
    if(input4.value ==""){
        error4.innerHTML=("0-9 ")
    }
    else if(input2.value==input4.value){
four.style.display="none";
five.style.display="flex"
result.innerHTML=`player ${input3.value} win`
count4.innerHTML=count
 }else{
    count=count-1;
    count4.innerHTML=`chance left ${count}`
    if(count==0){
        four.style.display="none";
        five.style.display="flex"
        result.innerHTML=`player ${input3.value} win`
    }
 }
})