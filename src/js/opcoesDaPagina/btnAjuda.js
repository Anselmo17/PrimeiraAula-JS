;(function() {
    const $btnAjuda = document.querySelector('#btnAjuda')


    // Usuario
    // Clica
    // Ajuda aparece

    // Dev
    // Cadastrar um evento: Event Listener

    $btnAjuda.addEventListener('click', () => {
       /* const ajudas = [
                {msg: 'Voce pode add cartao', cor: 'pink'},
                {msg: 'Remover cartao', cor: 'lime'},
                {msg: 'Mudar a cor', cor: 'orange'},
                {msg: 'Você pode arrumar a coluna', cor: 'silver'},
                {msg: '"Acessivel"', cor: 'white'}
            ]
            */

            //função que cria objeto
            const xhr = new XMLHttpRequest()

            //abrindo a url pedida
            xhr.open("GET","http://ceep.herokuapp.com/cartoes/instrucoes")

            //envia configuração ao servidor e ele é assincrono
            xhr.send()


            xhr.responseType = "json"

            //callback função que espera uma ação
            xhr.addEventListener("load", function (){
                
               // const textao  = xhr.response 

                //transformando os dados em arquivos JSON
                const ajudas = xhr.response.instrucoes   


                ajudas.reverse().forEach(ajuda => criarCartao(ajuda))
            })


    })



    $btnAjuda.classList.remove('no-js')
})()