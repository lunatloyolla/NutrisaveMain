const BotaoPublicar = document.getElementById('BotaoPublicar');
const campoTexto = document.getElementById('Texto'); 
const commentsSection = document.getElementById('commentsSection');

BotaoPublicar.addEventListener('click', function() {
    const comentario = campoTexto.value.trim(); 

    if (comentario) {
   
        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario'); 

 
        novoComentario.innerHTML = `
            <div class="user">
                <img src="assets/people.png" class="FotoPerfilUser" alt="Foto de Perfil">
                <div class="ConteudoUser">
                    layanerx
                    <img src="assets/Group 46.svg" alt="" width="150">
                    <p style="margin: 0;">${comentario}</p>
                </div>
            </div>
        `;

        commentsSection.appendChild(novoComentario);

        campoTexto.value = '';
    } else {
        alert('Por favor, digite um comentário.');
    }
});

function goToTelaAlimentoEspecificado(){
    const botao = document.getElementById('botao');
    if(botao){
        window.location.href = 'TelaAlimentoEspecificado.html';
    }

}
