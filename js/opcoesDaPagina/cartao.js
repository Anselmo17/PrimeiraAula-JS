;(function(){

const cartoes = document.querySelectorAll('.cartao')

    for( let cartao of cartoes){
        cartao.addEventListener('focusin' , function(){
            
            //adicionando a classe 
            cartao.classList.add('cartao--focado')
        })

        //removendo a classe cartao focado
        cartao.addEventListener('focusout', function(){
            cartao.classList.remove('cartao--focado')
        })


    }
})()