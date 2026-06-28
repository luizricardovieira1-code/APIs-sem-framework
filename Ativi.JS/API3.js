// 'async' avisa ao JS que essa função faz buscas na internet
async function buscarDados() {
    
    // 'await' diz: "Espere a internet responder antes de ir para a próxima linha"
    let respostaBruta = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // 'await' diz: "Espere desembalar o conteúdo"
    let usuarios = await respostaBruta.json();
    
    // BINGO! A partir daqui é o JS normal que você já domina:
    console.log("--- LISTA REPRODUZIDA COM ASYNC/AWAIT ---");
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nome: ${usuarios[i].name}`);
    }
}

// Executa a função
buscarDados();