const especificacoes = [
    {nome: "Cupuaçu", imagem: "assets/cupuaçu.svg", calcio: "8,9 mg", fosforo: "16,3 mg", ferro: "0,4 mg", vitaminaC: "24,5 mg", proteina: "1,1 g", gorduras: "1,25 g", fibras: "2,42 g", carboidratos: "10,5 g", linkReceita: "https://www.tudogostoso.com.br/receita/77491-creme-de-cupuacu.html", ImgReceita: "assets/ImgReceitas/receitaCupuacu.jpeg" },
    {nome: "Aveia", imagem: "assets/aveia.svg", calcio: "54 mg", fosforo: "164 mg", ferro: "3,6 mg", vitaminaC: "0 mg", proteina: "13,15 g", gorduras: "6,9 g", fibras: "10,6 g", carboidratos: "66,3 g", linkReceita: "https://www.receiteria.com.br/receita/cestinhas-de-aveia-com-banana-e-iogurte/", ImgReceita: "assets/ImgReceitas/receitaAveia.jpeg" },
    {nome: "Banana", imagem: "assets/banana.svg", calcio: "5 mg", fosforo: "22 mg", ferro: "0,3 mg", vitaminaC: "8,7 mg", proteina: "1,09 g", gorduras: "0,33 g", fibras: "2,6 g", carboidratos: "22,84 g", linkReceita: "https://www.tudogostoso.com.br/receita/119737-bolo-de-banana-rapido-de-liquidificador.html", ImgReceita: "assets/ImgReceitas/receitaBanana.jpeg" },
    {nome: "Cheetos", imagem: "assets/cheetos.svg", calcio: "24 mg", fosforo: "101 mg", ferro: "0,4 mg", vitaminaC: "0 mg", proteina: "2,2 g", gorduras: "9,9 g", fibras: "0,9 g", carboidratos: "20 g", linkReceita: "https://cazamoderna.com.br/receita-de-queijo-empanado-com-cheetos/", ImgReceita: "assets/ImgReceitas/receitaCheetos.jpeg" },
    {nome: "Doce", imagem: "assets/doce.svg", calcio: "127 mg", fosforo: "142 mg", ferro: "0,2 mg", vitaminaC: "0 mg", proteina: "3,22 g", gorduras: "7,65 g", fibras: "0 g", carboidratos: "57,57 g", linkReceita: "https://www.tudogostoso.com.br/receita/4865-doce-de-leite-caseiro.html", ImgReceita: "assets/ImgReceitas/receitaDoce.jpeg" },
    {nome: "Miojo", imagem: "assets/miojo.svg", calcio: "23 mg", fosforo: "92 mg", ferro: "0,66 mg", vitaminaC: "0 mg", proteina: "6,3 g", gorduras: "14,2 g", fibras: "0,6 g", carboidratos: "27,2 g", linkReceita: "https://www.tudogostoso.com.br/receita/111830-miojo-cremoso.html", ImgReceita: "assets/ImgReceitas/receitaMiojo.jpeg" }
];
function gerarCards() {
    const container = document.getElementById('alimentosContainer');

    especificacoes.forEach((alimento, index) => {
        const card = document.createElement('div');
        card.className = 'CardAlimento';
        card.setAttribute('data-index', index);
        card.onclick = () => atualizarInformacoes(card);

        card.innerHTML = `
            <img src="${alimento.imagem}" alt="${alimento.nome}" class="cupuacu">
            <h3>${alimento.nome}</h3>
            <table class="tabela" border="1">
                <tr>
                    <td>100g</td>
                    <td>${alimento.valorEnergético || 'N/A'}</td>
                </tr>
            </table>
        `;

        container.appendChild(card);
    });
}

function atualizarInformacoes(card) {
    const index = card.getAttribute('data-index');
    const alimento = especificacoes[index];

    const tabelaComponente = document.querySelector('.InfoAlimento .qtdComponente');

    tabelaComponente.innerHTML = `
        <tr>
            <td>quantidade</td>
            <td>Componente</td>
        </tr>
        <tr>
            <td>Calcio</td>
            <td>${alimento.calcio || '-'}</td>
        </tr>
        <tr>
            <td>Fosforo</td>
            <td>${alimento.fosforo || '-'}</td>
        </tr>
        <tr>
            <td>Ferro</td>
            <td>${alimento.ferro || '-'}</td>
        </tr>
        <tr>
            <td>Vitamina C</td>
            <td>${alimento.vitaminaC || '-'}</td>
        </tr>
        <tr>
            <td>Proteina</td>
            <td>${alimento.proteina || '-'}</td>
        </tr>
        <tr>
            <td>Gorduras</td>
            <td>${alimento.gorduras || '-'}</td>
        </tr>
        <tr>
            <td>Fibras</td>
            <td>${alimento.fibras || '-'}</td>
        </tr>
        <tr>
            <td>Carboidratos</td>
            <td>${alimento.carboidratos || '-'}</td>
        </tr>
    `;
    if (alimentoSelecionado.ImgReceita) {
        const ImgReceita = document.querySelector('.Receita .ImagemReceita');
        ImgReceita.src = alimentoSelecionado.ImgReceita;
        ImgReceita.style.display = 'block';  
    }

    if (alimentoSelecionado.linkReceita) {
        const linkReceita = document.querySelector('.Receita .LinkReceita');
        linkReceita.href = alimentoSelecionado.linkReceita;
        linkReceita.textContent = 'Ver Receita';
        linkReceita.style.display = 'block';  
    }
}

window.onload = gerarCards;

function goToTelaInicial() {
    const botaoVoltar = document.getElementById('botaoVoltar');
    if(botaoVoltar){
        window.location.href = 'Telainicial.html';
    }
};

function goToTelaSalvos() {
    const botaoSalvos = document.getElementById('botao');
    if(botaoSalvos){
        window.location.href = 'TelaSalvos.html';
    }
};

function goToTelaAlimentoEspecificado(nomeAlimento) {
    const alimentoSelecionado = especificacoes.find(alimento => alimento.nome === nomeAlimento);
    localStorage.setItem('alimentoSelecionado', JSON.stringify(alimentoSelecionado));
    window.location.href = 'TelaAlimentoEspecificado.html';
}

function Pesquisar() {
    const pesquisaInput = document.querySelector('.BarraPesquisa').value;
    const alimentoSelecionado = especificacoes.find(alimento => alimento.nome.toLowerCase() === pesquisaInput.toLowerCase());

    if (alimentoSelecionado) {
        localStorage.setItem('alimentoSelecionado', JSON.stringify(alimentoSelecionado));
        window.location.href = 'TelaAlimentoEspecificado.html';
    } else {
        alert('Alimento não encontrado!'); 
    }
}




