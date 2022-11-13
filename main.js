const txtn1 = document.getElementById("n1");
// const txtn1 = document.querySelector("#n1");
const txtn2 = document.getElementById("n2");
const respuesta = document.getElementById("resp");
const btncalcular = document.getElementById("calcular");
btncalcular.addEventListener('click' , calcular)

function calcular(){
    const op1= parseFloat(txtn1.value);
    const op2= parseFloat(txtn2.value);
    let resp= op1+op2
    respuesta.innerText=resp
    respuesta.style="text-align:center;font-size:50px; border-style: double; border-color: blue;"
}
