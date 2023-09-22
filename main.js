function larissa () {
    document.querySelector('#som_tecla_Toim').play();
}

const lista = document.querySelector('.tecla');

let contador = 0;

while (contador < 9) {
    lista[contador].onclick = larissa;
    contador = contador + 1;
    console.log (contador)
}