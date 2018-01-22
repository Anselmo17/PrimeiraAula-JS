'use strict';

;(function () {
    // IIFE   
    var form = document.querySelector('.formNovoCartao');

    // Add EventListener
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var $campoDeConteudo = document.querySelector('.formNovoCartao-conteudo');
        var conteudo = $campoDeConteudo.value.trim();

        //console.log('Hey ho lets go', conteudo)
        if (!conteudo) {
            console.log('Não tem conteúdo seu vacilaum');
            // <div class="formNovoCartao-msg">
            //     Formulário inválido. Não digite vários nada!!!!
            // </div>

            // Imperativa
            var $msgErro = document.createElement('div');

            $msgErro.classList.add('formNovoCartao-msg');
            $msgErro.textContent = 'Formulário inválido. Não digite vários nada!!!!';

            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);

            $msgErro.addEventListener('animationend', function () {
                $msgErro.remove();
            });
        } else {

            // Cria a funcao
            criarCartao(conteudo);
        }
        $campoDeConteudo.value = '';
    });
    // Conteudo importa
    form.classList.remove('no-js');
})();