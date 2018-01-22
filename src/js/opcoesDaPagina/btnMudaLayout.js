
//pegar o elemento e deixa-lo constante
const btn = document.querySelector('#btnMudaLayout')//ES6


//função para mudar o comando do texto que aparecerá
function mudaTexto(elemento){
    

    if(this.textContent == 'Blocos'){
        this.textContent = 'Linhas';
    } 
    else
    {
        this.textContent = 'Blocos';
    }

}

//botao que ao ser clicado muda o texto
btn.addEventListener('click', mudaTexto);

//adicionar classe
const mural = document.querySelector('.mural');

    //função muda layout
    function mudaLayout(){
      
        //
        mural.classList.toggle('mural--linha')

        /*  if(mural.classList.contains() == ''){
            mural.classList.add('mural--linha')
        }else{
            
        }*/
    }

    btn.addEventListener('click', mudaLayout);


btn.classList.remove('no-js')

