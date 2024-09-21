window.onload = function() {
    const alimentoSelecionado = JSON.parse(localStorage.getItem('alimentoSelecionado'));

    if (alimentoSelecionado) {
        document.querySelector('.CardAlimento img').src = alimentoSelecionado.imagem;
        document.querySelector('.CardAlimento h3').textContent = alimentoSelecionado.nome;

        const tabelaComponente = document.querySelector('.InfoAlimento .qtdComponente');
        tabelaComponente.innerHTML = `
            <tr>
                <td>quantidade</td>
                <td>Componente</td>
            </tr>
            <tr>
                <td>Calcio</td>
                <td>${alimentoSelecionado.calcio || '-'}</td>
            </tr>
            <tr>
                <td>Fosforo</td>
                <td>${alimentoSelecionado.fosforo || '-'}</td>
            </tr>
            <tr>
                <td>Ferro</td>
                <td>${alimentoSelecionado.ferro || '-'}</td>
            </tr>
            <tr>
                <td>Vitamina C</td>
                <td>${alimentoSelecionado.vitaminaC || '-'}</td>
            </tr>
            <tr>
                <td>Proteina</td>
                <td>${alimentoSelecionado.proteina || '-'}</td>
            </tr>
            <tr>
                <td>Gorduras</td>
                <td>${alimentoSelecionado.gorduras || '-'}</td>
            </tr>
            <tr>
                <td>Fibras</td>
                <td>${alimentoSelecionado.fibras || '-'}</td>
            </tr>
            <tr>
                <td>Carboidratos</td>
                <td>${alimentoSelecionado.carboidratos || '-'}</td>
            </tr>
        `;
    }
};


function goToTelaInicial() {
    const botaoVoltar = document.getElementById('botaoVoltar');
    if(botaoVoltar){
        window.location.href = 'Telainicial.html';
    }
};

function goToTelaAvaliacao() {
    const botaoAvaliar = document.getElementById('botaoAvaliar');
    if(botaoAvaliar){
        window.location.href = 'TelaAvaliacao.html';
    }
};
