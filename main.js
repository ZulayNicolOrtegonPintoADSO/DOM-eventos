const respuesta = document.getElementById(`resp`);
const btnejecutar = document.getElementById(`ejecuta`);
btnejecutar.addEventListener('click' , iniciar);

let frutas = ["manzana" , "banana" , "pera" , "fresa"];

function iniciar(){
    respuesta.innerText= "lA CANTIDAD DE ELEMENTOS Q HAY: " + frutas.length + "\n EN EL INDEX 1 ESTÁ: " + frutas[1]  + frutas.length + "\n EL ÚLTIMO ELEMENTO DEL ARRAYS ES: " + frutas[frutas.length-1]
}

