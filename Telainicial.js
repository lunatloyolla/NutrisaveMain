const especificacoes = [
    { nome: "Cupuaçu", imagem: "assets/cupuaçu.svg", calcio: "8,9 mg", fosforo: "16,3 mg", ferro: "0,4 mg", vitaminaC: "24,5 mg", proteina: "1,1 mg", gorduras: "1,25 mg", fibras: "2,42 mg", carboidratos: "10,5 mg", linkReceita: "https://www.tudogostoso.com.br/receita/77491-creme-de-cupuacu.html", ImgReceita: "assets/image 21.svg"},
    { nome: "Aveia", imagem: "assets/aveia.svg", valorEnergético: "110 kcal", Carboidratos: "17g", proteinas: "4,4g", gorduras: "2,7g", fibra: "3g", sodio: "0mg", linkReceita: "https://www.receiteria.com.br/receita/cestinhas-de-aveia-com-banana-e-iogurte/", ImgReceita: "assets/receitaAveia.svg"},
    { nome: "Banana", imagem: "assets/banana.svg", vitamina: "64mg", ferro: "0,2mg", magnesio: "26mg", fosforo: "22mg", potassio: "358mg", linkReceita: "https://www.tudogostoso.com.br/receita/119737-bolo-de-banana-rapido-de-liquidificador.html", ImgReceita: "assets/receitaBanana.svg"},
    {nome: "Cheetos", imagem: "assets/cheetos.svg", quantidade: "componente", valorEnerg: "119kcal", carboidratos: "16g", proteina: "'1,5g", gorduras: "5,6 mg", sodio: "120g", linkReceita: "https://cazamoderna.com.br/receita-de-queijo-empanado-com-cheetos/",  ImgReceita: "assets/receitaCheetos.svg"},
    {nome: "Doce de Leite", imagem: "assets/doce.svg", quantidade: "componente", valorEnerg: "110kcal", carboidratos: "11g", proteina: "'1,5g", gorduras: "6,3 mg", sodio: "110g", linkReceita: "https://www.tudogostoso.com.br/receita/4865-doce-de-leite-caseiro.html", ImgReceita: "assets/receitaDoce.svg"},
    {nome: "Miojo", imagem: "assets/miojo.svg", quantidade: "componente", valorEnerg: "110kcal", carboidratos: "11g", proteina: "'1,5g", gorduras: "6,3 mg", sodio: "110g", linkReceita: "https://www.tudogostoso.com.br/receita/111830-miojo-cremoso.html",  ImgReceita: "assets/receitaMiojo.svg"}
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
}

window.onload = gerarCards;

function goToTelaInicial() {
    const botaoVoltar = document.getElementById('botaoVoltar');
    if(botaoVoltar){
        window.location.href = 'Telainicial.html';
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




