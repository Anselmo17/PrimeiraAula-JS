
//Instantaneamente (IIFE)
//função anonima 



console.log('This na vida real', this)
;(function () {

    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    //loop para funcionar o botao btns e sempre o let em vez de var 
    for(let i = 0; i < btns.length; i++){
        
        btns[i].addEventListener('click', function(){
            console.log(i)
            const cartao = btns[i].parentNode.parentNode 

            //adiciona a classe cartao
            cartao.classList.add('cartao--somePeixinho')

                //função remove cartão 
        cartao.addEventListener('transitionend', function(){
            cartao.remove()
        })

        /*
        setTimeout(function(){
            cartao.remove()
        },300)*/
         })
     }
})()