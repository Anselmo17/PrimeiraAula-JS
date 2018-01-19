;(function(){
    const form = document.querySelector('.formNovoCartao')

    //adicionar EventListener
    form.addEventListener('submit',function(event){
        event.preventDefault()
        const $campoDeConteudo = document.querySelector(".formNovoCartao-conteudo")
        const conteudo = $campoDeConteudo.value.trim().length === 0     
        
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
            console.log("Não deu erro...")
        }

    })

    form.classList.remove('no-js')
})()