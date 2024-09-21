

const especificacoes = [
    { nome: "Cupuaçu", imagem: "assets/cupuaçu.svg", calcio: "8,9 mg", fosforo: "16,3 mg", ferro: "0,4 mg", vitaminaC: "24,5 mg", proteina: "1,1 mg", gorduras: "1,25 mg", fibras: "2,42 mg", carboidratos: "10,5 mg" },
    { nome: "Aveia", imagem: "assets/aveia.svg", valorEnergético: "110 kcal", Carboidratos: "17g", proteinas: "4,4g", gorduras: "2,7g", fibra: "3g", sodio: "0mg" },
    { nome: "Banana", imagem: "assets/banana.svg", vitamina: "64mg", ferro: "0,2mg", magnesio: "26mg", fosforo: "22mg", potassio: "358mg" },
    {nome: "Cheetos", imagem: "assets/cheetos.svg", quantidade: "componente", valorEnerg: "119kcal", carboidratos: "16g", proteina: "'1,5g", gorduras: "5,6 mg", sodio: "120g"},

    {nome: "Doce de Leite", imagem: "assets/doce.svg", quantidade: "componente", valorEnerg: "110kcal", carboidratos: "11g", proteina: "'1,5g", gorduras: "6,3 mg", sodio: "110g"},

    {nome: "Miojo", imagem: "assets/miojo.svg", quantidade: "componente", valorEnerg: "110kcal", carboidratos: "11g", proteina: "'1,5g", gorduras: "6,3 mg", sodio: "110g"}
    // Adicione outros alimentos conforme necessário
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

// Chame a função para gerar os cards quando a página carregar
window.onload = gerarCards;



