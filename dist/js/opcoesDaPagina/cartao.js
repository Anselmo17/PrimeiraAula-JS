'use strict';

;(function () {

    var cartoes = document.querySelectorAll('.cartao');

    var _loop = function _loop(cartao) {
        cartao.addEventListener('focusin', function () {

            //adicionando a classe 
            cartao.classList.add('cartao--focado');
        });

        //removendo a classe cartao focado
        cartao.addEventListener('focusout', function () {
            cartao.classList.remove('cartao--focado');
        });

        //colocando as cores conforme o click no botao
        cartao.addEventListener('change', function (event) {

            //variavel constante  recebendo o evento 
            var $elementoAtual = event.target;

            //Delegate
            var isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo');

            //mudar a cor do radio quando acionado
            if (isRadioTipo) {
                var novaCor = $elementoAtual.value;
                cartao.style.background = novaCor;
            }
        });
        /*
        cartao.addEventListener('Keydown' , function (event){    
            if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key ==='Enter' || event.key === '')){
                event.target.click()
            }
          })
        */

        //evento quando alguma tecla aciona 
        cartao.addEventListener('Keydown', function (event) {

            var $elementoAtual = event.target;
            var islabel = $elementoAtual.classList.contains('opcoesDoCartao-opcao');

            if (islabel && (event.key === 'Enter' || event.key === '')) {
                $elementoAtual.target.click();
            }
        });

        //remoção do cartão com o delegate
        cartao.addEventListener('click', function (event) {

            $elementoAtual = event.target;
            isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove');

            if (isRemove) {
                //adiciona a classe cartao
                cartao.classList.add('cartao--somePeixinho');
                //função remove cartão 
                cartao.addEventListener('transitionend', function () {
                    cartao.remove();
                });
            }
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = cartoes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cartao = _step.value;

            _loop(cartao);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})();