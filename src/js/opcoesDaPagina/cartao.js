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


        //colocando as cores conforme o click no botao
        cartao.addEventListener('change', function (event){

            //variavel constante  recebendo o evento 
            const $elementoAtual = event.target

            //Delegate
           const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo')
           
           //mudar a cor do radio quando acionado
           if(isRadioTipo){
                const novaCor = $elementoAtual.value
                cartao.style.background = novaCor
           }
        })
        /*
        cartao.addEventListener('Keydown' , function (event){    
            if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key ==='Enter' || event.key === '')){
                event.target.click()
            }

        })
        */
        
        //evento quando alguma tecla aciona 
        cartao.addEventListener('Keydown' , function(event){
           
            const $elementoAtual = event.target
            const islabel =  $elementoAtual.classList.contains('opcoesDoCartao-opcao')

            
            if(islabel && (event.key === 'Enter'|| event.key === '')){
                $elementoAtual.target.click()
            }
         })

            //remoção do cartão com o delegate
            cartao.addEventListener('click', function(event){
               
                $elementoAtual = event.target
                isRemove = $elementoAtual.classList.contains('opcoesDoCartao-remove')
                
                    if(isRemove){    
                            //adiciona a classe cartao
                            cartao.classList.add('cartao--somePeixinho')
                            //função remove cartão 
                            cartao.addEventListener('transitionend', function(){
                                cartao.remove()
                            })  
                    }
            })
         }
    }) ()