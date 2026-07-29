const alteracaoRisco = document.querySelector('.historico-alteracoes');

// Função para buscar dados de risco do banco de dados
async function getRiskData() {
    const riskData = [
        {
            id: 1,
            versao: 0,
            dataAlteracao: '06/12/2023',
            responsavel: 'Alice',
            atividade: "Created"
        },

        {
            id: 1,
            versao: 1,
            dataAlteracao: '06/01/2024',
            responsavel: 'Alice',
            atividade: "Edited"
        },
    ];
    return riskData;
}


async function adicionarHistorico() {
    const riskData = await getRiskData();

    riskData.forEach(risk => {

        const versaoRisco = document.createElement('tr');
        versaoRisco.classList.add('historico-alteracoes');

        const versao = document.createElement('td');
        versao.textContent = risk.versao;

        const data = document.createElement('td');
        data.textContent = risk.dataAlteracao;

        const responsavel = document.createElement('td');
        responsavel.textContent = risk.responsavel;

        const atividade = document.createElement('td');
        atividade.textContent = risk.atividade;

        versaoRisco.appendChild(versao);
        versaoRisco.appendChild(data);
        versaoRisco.appendChild(responsavel);
        versaoRisco.appendChild(atividade);


        alteracaoRisco.appendChild(versaoRisco);
    });
}

adicionarHistorico()