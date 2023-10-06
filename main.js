                                                                                                                                                                                                                                                                                                                                                function tocar(idAudio) {
  
                                                                                                                                                                                                                                                                                                                                                  document.querySelector('#som_tecla_Toim').play();
}

const lista = document.querySelectorAll('.tecla');

let contador = 0;

for (contador < lista.length) {
    const tecla = lista[contador];
    const classe = tecla.classList[1];
    //console.log(classe);
    const idAudio = `#som_${classe}`;
    //console.log(idAudio);


    tecla.onclick = function () {
    tocar(idAudio);
    }
   
    contador = contador + 1;
    
   tecla.onkeydown = function (evento){
    if (evento.code === 'Enter' || evento.code === 'Space') { 
    tecla.classList.add('ativa');
    //console.log(evento.code === 'Enter' || evento.code === 'Space');
}
   }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
