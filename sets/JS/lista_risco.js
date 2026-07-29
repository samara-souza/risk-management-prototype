const riskCardsContainer = document.querySelector('.risk-cards');
const riscosDesativadosContainer = document.querySelector('.riscos-desativados');
const searchInput = document.getElementById('search-input');

// Função para buscar dados de risco do banco de dados
async function getRiskData() {
    const riskData = [
        {
            id: 1,
            title: 'Atraso na nomeação de fornecedores',
            status: 'desativado',
            codigo: '001',
            tipoRisco: 'Strategic',
            areaResponsavel:'APO',
            jalonAfetado: 'ABPT',
            piloto: 'Alice',
            impact: "high"
        },

        {
            id: 6,
            title: 'Atraso na nomeação de fornecedores',
            status: 'desativado',
            codigo: '006',
            tipoRisco: 'Strategic',
            areaResponsavel:'APO',
            jalonAfetado: 'ABPT',
            piloto: 'Caio',
            impact: "very-high"
        },

        {
            id: 4,
            title: 'Atraso na nomeação de fornecedores',
            status: 'ativo',
            codigo: '004',
            tipoRisco: 'Strategic',
            areaResponsavel:'APO',
            jalonAfetado: 'ABPT',
            piloto: 'Artur',
            impact: "medium"
        },

        {
            id: 5,
            title: 'Atraso na nomeação de fornecedores',
            status: 'ativo',
            codigo: '005',
            tipoRisco: 'Strategic',
            areaResponsavel:'APO',
            jalonAfetado: 'ABPT',
            piloto: 'Lorena',
            impact: "low"
        },

        {
            id: 2,
            title: 'Atraso na nomeação de fornecedores',
            status: 'ativo',
            codigo: '002',
            tipoRisco: 'Strategic',
            areaResponsavel:'APO',
            jalonAfetado: 'ABPT',
            piloto: 'Sabrina',
            impact: "very-low"
        },
    ];
    return riskData;
}

// Função para renderizar os cards de risco
async function renderRiskCards() {
    const riskData = await getRiskData();

    riskData.forEach(risk => {

        if (risk.status == "ativo"){

            const riskCard = document.createElement('div');
            riskCard.classList.add('risk-card');

            const title = document.createElement('h2');
            title.textContent = risk.title;

            const codigo = document.createElement('p');
            codigo.textContent = "Código: " + risk.codigo;

            const tipoRisco = document.createElement('p');
            tipoRisco.textContent = "Tipo de risco: " + risk.tipoRisco;

            const areaResponsavel = document.createElement('p');
            areaResponsavel.textContent = "Área Responsável: " + risk.areaResponsavel;

            const jalonAfetado = document.createElement('p');
            jalonAfetado.textContent = "Jalón Afetado: " + risk.jalonAfetado;

            const detalhes = document.createElement('a');
            detalhes.textContent = "Mais Informações";
            detalhes.href = "detalhes.html"

            riskCard.style.borderColor = borderColor(risk.impact); // Define a cor da borda

            riskCard.appendChild(title);
            riskCard.appendChild(codigo);
            riskCard.appendChild(tipoRisco);
            riskCard.appendChild(areaResponsavel);
            riskCard.appendChild(jalonAfetado);
            riskCard.appendChild(detalhes);



            riskCardsContainer.appendChild(riskCard);
        }

        else if(risk.status == "desativado"){
            const riskCard = document.createElement('div');
            riskCard.classList.add('risco-desativado');

            const descricao = document.createElement('p');
            descricao.textContent = "Risco " + risk.codigo + " desativado por: " + risk.piloto;

            riskCard.appendChild(descricao);

            riscosDesativadosContainer.appendChild(riskCard);
        }
    });
}

// Função para filtrar os cards de risco pela pesquisa
function filterRiskCards(searchTerm) {
    const riskCards = document.querySelectorAll('.risk-card');

    riskCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

renderRiskCards();

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterRiskCards(searchTerm);
});

function borderColor(impact) {
    if (impact == "very-low"){
        return '#7BC333'
    }

    else if (impact == "low"){
        return '#ADFF2F'
    }

    else if (impact == "medium"){
        return '#FCB514'
    }

    else if (impact == "high"){
        return '#FF7F50'
    }

    else if (impact == "very-high"){
        return '#F12B2B'
    }
}

