

var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");



function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
    h3.textContent = "linear-gradient(to right," + color1.value + "," + color2.value +");";
}


function setInitialGradient(){
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
  h3.textContent = "linear-gradient(to right," + color1.value + "," + color2.value +");";
}



function forRandomColor(){

    color1.value = "#" + Math.trunc(Math.random()*10e6).toString(16);
    color2.value = "#" + Math.trunc(Math.random()*10e6).toString(16);


    if(color1.value.length < 7){
      color1.value = "#" + Math.trunc(Math.random()*10e7).toString(16);
    }

    if(color2.value.length < 7){
      color2.value = "#" + Math.trunc(Math.random()*10e7).toString(16);
    }



    body.style.background = "linear-gradient(to right," +color1.value + "," + color2.value +")";
    h3.textContent = "linear-gradient(to right," + color1.value + "," + color2.value +");";
}


setInitialGradient();

button.addEventListener("click",forRandomColor);


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
