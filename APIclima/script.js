const CIDADES = {
    "-28.435852": { nome: "Tubarão",       lng: "-49.0069" },
    "-27.592268": { nome: "Florianópolis", lng: "-48.5492" },
    "-26.326889": { nome: "Joinville",     lng: "-48.8456" },
    "-27.803164": { nome: "Lages",         lng: "-50.3261" },
};

async function buscarclima() {
    try {
        const resposta = await fetch( //api com timezone = auto para pegar o horário local da cidade e current=temperature_2m para pegar a temperatura atual
            'https://api.open-meteo.com/v1/forecast?latitude=-28.4667,-27.5967,-26.3044,-27.8161&longitude=-49.0069,-48.5492,-48.8456,-50.3261&hourly=temperature_2m&current=temperature_2m&timezone=auto&forecast_days=1'
        );
//totalmente opcional, mas é uma boa prática verificar se a resposta da API foi bem-sucedida antes de tentar processar os dados
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const dados = await resposta.json();
        // A API pode retornar um objeto ou um array de objetos (várias localizações).
        // Se for array, trabalhamos apenas com a primeira entrada (não alteramos a API).
        
        const localizacoes = Array.isArray(dados) ? dados : [dados];

        const resultados = localizacoes.map((clima) => {
            // Arredonda as coordenadas para bater com as chaves do mapa
            const latKey = String(clima.latitude);

            const cidade = CIDADES[latKey]?.nome ?? `Lat ${clima.latitude}`;
            const temperatura = clima.current?.temperature_2m;
            const horario = clima.current?.time;

            return { cidade, temperatura, horario };
        });

        resultados.forEach(({ cidade, temperatura, horario }) => {
            console.log(`Cidade: ${cidade}`);
            console.log(`Temperatura atual: ${temperatura}°C`);
            console.log(`Horário da leitura: ${horario}`);
        });

        // 4. Agora você pode usar nomeDaCidade onde precisar
        return resultados;
    } catch (erro) {
        console.error('requisição falhou por este motivo:', erro);
    }
}

buscarclima();