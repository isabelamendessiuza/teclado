function tocar(idAudio) {
    document.querySelector('#som_tecla_Toim').play();
}

const lista = document.querySelector('.tecla');

let contador = 0;

while (contador < lista.length) {
    lista[contador].onclick = function () {
        tocar('#som_tecla_Toim');
    }
    const classe = lista[contador].classList[1];
   console.log(classe);
    contador = contador + 1;
    console.log(contador);
}