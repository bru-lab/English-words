function mostrarResultado(score, numeroPalavrasPropostas){
    let spanScore = document.querySelector('.zonaScore span');
    let mostrarScore = ` Score: ${score}/${numeroPalavrasPropostas}`;
    spanScore.innerHTML = mostrarScore;
}

function mostrarProposicao(proposicao){
    let zonaProposicao = document.querySelector('.zonaProposicao');
    zonaProposicao.innerText = proposicao;
}


function comecarJogo(){

    let score = 0;
    let i = 0;
    let listaProposicao = words;

    let validateBtn = document.getElementById('validateBtn');
    let textField = document.getElementById('textField');

    mostrarProposicao(listaProposicao[i]);
    

    validateBtn.addEventListener('click', () => {
        if (textField.value === listaProposicao[i])
        {
            score++;
        }
        i++;
        mostrarResultado(score, listaProposicao.length);
        textField.value = '';
        if (listaProposicao[i] === undefined) {
            mostrarProposicao('Fim de jogo');
            validateBtn.disabled = true;
            
            
        } else {
            mostrarProposicao(listaProposicao[i]);
        }
    })

    

   let listaBtnRadio = document.querySelectorAll('.opcao input');
   for (let index = 0; index < listaBtnRadio.length; index++){
        listaBtnRadio[index].addEventListener('change', (event) => {
            if (event.target.value === '1'){
                listaProposicao = words;
            } else {
                listaProposicao = phrases;
            }

            mostrarProposicao(listaProposicao[i]);
        })

       
   }
        
   mostrarResultado(score, i);
   
}




    



































