async function getvaleus() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL');
        const data = await response.json();

        const usdRate = data.USDBRL;
        const eurRate = data.EURBRL;
        const gbpRate = data.GBPBRL;

        const usdChangeElement = document.getElementById('usd-change');
        const eurChangeElement = document.getElementById('eur-change');
        const gbpChangeElement = document.getElementById('gbp-change');

        document.getElementById('usd-price').textContent = parseFloat(usdRate.bid).toFixed(2);
        document.getElementById('eur-price').textContent = parseFloat(eurRate.bid).toFixed(2);
        document.getElementById('gbp-price').textContent = parseFloat(gbpRate.bid).toFixed(2);

        usdChangeElement.textContent = (usdRate.pctChange >= 0 ? '+' : '') + parseFloat(usdRate.pctChange).toFixed(2) + '%';
        eurChangeElement.textContent = (eurRate.pctChange >= 0 ? '+' : '') + parseFloat(eurRate.pctChange).toFixed(2) + '%';
        gbpChangeElement.textContent = (gbpRate.pctChange >= 0 ? '+' : '') + parseFloat(gbpRate.pctChange).toFixed(2) + '%';

        usdChangeElement.style.color = usdRate.pctChange > 0 ? 'green' : 'red';
        eurChangeElement.style.color = eurRate.pctChange > 0 ? 'green' : 'red';
        gbpChangeElement.style.color = gbpRate.pctChange > 0 ? 'green' : 'red';
                
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
    }
}

window.addEventListener('load', getvaleus);