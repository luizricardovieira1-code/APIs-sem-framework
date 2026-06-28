async function buscarclima() {
    try {
        const resposta = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=-28.4667&longitude=-49.0069&hourly=temperature_2m'
        );

        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const clima = await resposta.json();
        console.log('Resposta da API:', clima);
        return clima;
        
    } catch (erro) {
        console.error('requisição falhou por este motivo:', erro);
    }
}

buscarclima();