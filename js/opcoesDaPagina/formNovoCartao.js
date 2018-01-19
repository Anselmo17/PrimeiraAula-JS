;(function(){
    const form = document.querySelector('.formNovoCartao')

    //adicionar EventListener
    form.addEventListener('submit',function(event){
        event.preventDefault()
        const $campoDeConteudo = document.querySelector(".formNovoCartao-conteudo")
        const conteudo = $campoDeConteudo.value.trim().length === 0     
        

        let numeroCartao = 0
        //condição se o input estiver vazio
        if(conteudo){
            
            const $msgErro = document.createElement("div")
            $msgErro.classList.add("formNovoCartao-msg")
            $msgErro.textContent = "Formulario Inválido"

            const btnSubmit = form.children[form.children.length-1]

            //mensagem de animação quando não tiver erro
            form.addEventListener("animationend", function(event){
                event.target.remove()
            })
            form.insertBefore($msgErro, btnSubmit)
        } else{
             numeroCartao++
            const conteudoCartao = $campoDeConteudo.value
            const $cartao = (`
                    <article id="cartao_${numeroCartao}" class="cartao" tabindex="0">
                    <div class="opcoesDoCartao">
                    <button  class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>
            
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao1" class="opcoesDoCartao-radioTipo" checked>
                    <label for="corPadrão-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                        Padrão
                    </label>
            
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao1" class="opcoesDoCartao-radioTipo">
                    <label for="corImportante-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                        Importante
                    </label>
            
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao1" class="opcoesDoCartao-radioTipo">
                    <label for="corTarefa-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                        Tarefa
                    </label>
            
                    <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao1" class="opcoesDoCartao-radioTipo">
                    <label for="corInspiração-cartao1" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                        Inspiração
                    </label>
                    </div>
                    <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoCartao}</p>
                </article>    
                `)
                     $('.mural').append($cartao)


        }

    })

    form.classList.remove('no-js')
})()