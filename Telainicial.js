

function goToTelaSalvos() {
    const botao = document.getElementById('botao');
    if(botao){
        window.location.href = 'TelaSalvos.html';
    }

};


function goToTelaAlimentoEspecificado(alimento) {
            
    localStorage.setItem('alimentoSelecionado', alimento);
    window.location.href = 'TelaAlimentoEspecificado.html'; 
}