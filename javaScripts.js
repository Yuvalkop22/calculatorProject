function btn1(){
    document.getElementById("numClicked").value = "1";
    if (document.getElementById("result").value.includes(".0")){
        document.getElementById("result").value == "1";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value}
}
function btn2(){

    document.getElementById("numClicked").value = "2";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "2";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn3(){
    
    document.getElementById("numClicked").value = "3";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "3";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn4(){
    
    document.getElementById("numClicked").value = "4";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "4";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn5(){
    
    document.getElementById("numClicked").value = "5";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "5";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn6(){
    
    document.getElementById("numClicked").value = "6";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "6";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn7(){
    
    document.getElementById("numClicked").value = "7";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "7";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn8(){
   
    document.getElementById("numClicked").value = "8";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "8";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btn9(){
    
    document.getElementById("numClicked").value = "9";
    if (document.getElementById("result").value == ".0"){
        document.getElementById("result").value == "9";
    }else{
        document.getElementById("result").value = document.getElementById("result").value  + document.getElementById("numClicked").value} 
}
function btnClear(){
    document.getElementById("numClicked").value = ".0";
    document.getElementById("result").value = ".0";    
}
function btnResult(){
    let text = document.getElementById("result").value;
    if (text.includes("+")){
        const myArray  = text.split("+");
        let num1 = parseInt(myArray[0]);
        let num2 = parseInt(myArray[1]);
        let sum = num1 + num2;
        document.getElementById("result").value = sum.toString();
        document.getElementById("numClicked").value = sum.toString();
    }
    if (text.includes("-")){
        const myArray  = text.split("-");
        let num1 = parseInt(myArray[0]);
        let num2 = parseInt(myArray[1]);
        let sum = num1 - num2;
        document.getElementById("result").value = sum.toString();
        document.getElementById("numClicked").value = sum.toString();
    }
    if (text.includes("*")){
        const myArray  = text.split("*");
        let num1 = parseInt(myArray[0]);
        let num2 = parseInt(myArray[1]);
        let sum = num1 * num2;
        document.getElementById("result").value = sum.toString();
        document.getElementById("numClicked").value = sum.toString();
    }
    if (text.includes("/")){
        const myArray  = text.split("/");
        let num1 = parseInt(myArray[0]);
        let num2 = parseInt(myArray[1]);
        let sum = parseFloat(num1 / num2);
        document.getElementById("result").value = sum.toString();
        document.getElementById("numClicked").value = sum.toString();
    }
}
function addPlus(){
    document.getElementById("result").value = document.getElementById("numClicked").value.concat("+");
}
function addMinus(){
    document.getElementById("result").value = document.getElementById("numClicked").value.concat("-");
}
function addMult(){
    document.getElementById("result").value = document.getElementById("numClicked").value.concat("*");
}
function addDiv(){
    document.getElementById("result").value = document.getElementById("numClicked").value.concat("/");
}

