;(function(){

    const $btn = $("#btnSync")

   
$btn.click(function(){
    const xhr = new XMLHttpRequest()
    xhr.open("POST","http://ceep.herokuapp.com/cartoes/salvar")

    xhr.setRequestHeader("Content-type","application/json");

   const cartoesDaPagina = listaCartoes;

    const objeto = {
        usuario:"ans"
       , cartoes:[
            {conteudo:"bla", cor:"#EBFE40"},
            {conteudo:"bla1", cor:"#EBFE40"},
            {conteudo:"bla2", cor:"#EBFE40"}
        ]
    }


    xhr.send(JSON.stringify(objeto));

    xhr.addEventListener("load", function(){

        $btn.addClass("botaoSync--deuRuim");
        $btn.removeClass("botaoSync--deubom");
    });

    
})      


    $btn.removeClass("no-js")
 
})()