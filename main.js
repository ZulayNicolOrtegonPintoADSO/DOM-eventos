const respuesta = document.getElementById(`resp`);
const btnejecutar = document.getElementById(`ejecuta`);
btnejecutar.addEventListener('click' , iniciar);

let frutas = ["manzana" , "banana" , "pera" , "fresa" , "melocotón"];

function iniciar(){
    frutas.forEach(function(item,index,array){
        respuesta.innerText = "El último elemento que se recorrió en el ARRAYS: " + item +  "\n La cantidad de elementos que recorrió en el ARRAYS: " + index + "\n Todo el ARRAYS: " + array;
    })
}

