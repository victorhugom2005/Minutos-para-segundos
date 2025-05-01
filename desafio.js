
calculo();

function calculo(segundos){
    var segundos = parseInt(prompt("Digite quantos minutos gostaria de converter para segundos") * 60);
    if(Number.isNaN(segundos)){
        alert("isto não é um número");
        calculo();
    } else {
        alert(`${segundos} segundos`);
    }
};
