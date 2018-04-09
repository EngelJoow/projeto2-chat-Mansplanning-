
let resultado=new Array();
let sim = document.getElementById("btn-sim");
let nao = document.getElementById("btn-nao");

for (i=0; i < 10; i++){
    if (sim = 1){
        console.log (resultado = resultado.unshift ([1]));
    }else if (nao = 0) {
        console.log (resultado = resultado.unshift ([0]));
    }
} 
console.log (resultado);