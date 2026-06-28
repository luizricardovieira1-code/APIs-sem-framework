async function buscarclima() {
    try {
        const resposta = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=-28.4667&longitude=-49.0069&hourly=temperature_2m'
        );
//totalmente opcional, mas é uma boa prática verificar se a resposta da API foi bem-sucedida antes de tentar processar os dados
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const clima = await resposta.json();
        // Agora você pode acessar os dados do clima e a latitude/longitude da API
        const latDaApi = clima.latitude;
        const lngDaApi = clima.longitude;
        // Aqui você pode criar um objeto que mapeia coordenadas para nomes de cidades
        const LocationNames = {
            "-28.435852,-48.988647": "tubarão e região"
        };
        // Use as coordenadas da API para buscar o nome da cidade correspondente
        const chave = `${latDaApi},${lngDaApi}`;
        const nomeDaCidade = LocationNames[chave];

        console.log(`Cidade: ${nomeDaCidade}`); 
        console.log(`Dados do clima: ${clima}`); // → Dados do clima da API

        // 4. Agora você pode usar nomeDaCidade onde precisar
        return { cidade: nomeDaCidade, clima };
    } catch (erro) {
        console.error('requisição falhou por este motivo:', erro);
    }
}

buscarclima();