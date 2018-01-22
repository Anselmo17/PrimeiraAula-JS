'use strict';

;(function () {
    var $btnAjuda = document.querySelector('#btnAjuda');

    // Usuario
    // Clica
    // Ajuda aparece

    // Dev
    // Cadastrar um evento: Event Listener

    $btnAjuda.addEventListener('click', function () {
        /* const ajudas = [
                 {msg: 'Voce pode add cartao', cor: 'pink'},
                 {msg: 'Remover cartao', cor: 'lime'},
                 {msg: 'Mudar a cor', cor: 'orange'},
                 {msg: 'Você pode arrumar a coluna', cor: 'silver'},
                 {msg: '"Acessivel"', cor: 'white'}
             ]
             */

        //função que cria objeto
        var xhr = new XMLHttpRequest();

        //abrindo a url pedida
        xhr.open("GET", 'http://ceep.herokuapp.com/cartoes/instrucoes');

        //envia configuração ao servidor e ele é assincrono
        xhr.send();

        //callback função que espera uma ação
        xhr.addEventListener("load", function () {

            // const textao  = xhr.response 

            //transformando os dados em arquivos JSON
            var ajudas = xhr.response.instrucoes;

            ajudas.reverse().forEach(function (ajuda) {
                return criarCartao(ajuda);
            });
        });
    });

    $btnAjuda.classList.remove('no-js');
})();