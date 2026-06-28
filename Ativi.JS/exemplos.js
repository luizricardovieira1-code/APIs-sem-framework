//exemplo de objeto
let produto = {
    nome: "Teclado Mecânico",
    preco: 250.00,
    emEstoque: true
};

// Para acessar um valor, usamos o ponto (.):
console.log(produto.nome); // Saída: Teclado Mecânico

// Exibe a caixa de pergunta e salva o que a pessoa digitou na variável 'nome'
let nome = prompt("Qual é o seu nome?");

// Exibe uma mensagem de boas-vindas com o nome digitado
if (nome) {
  alert(`Olá, ${nome}! Seja bem-vindo(a).`);
}

//exemplo de array de objetos
console.table(usuariosAPI);

// Exibe os dados retornados da API no console
console.log("Dados retornados da API:", usuariosAPI);

// Filtra os usuários ativos usando o método filter()
let ativos = usuariosAPI.filter(usuario => usuario.ativo === true);
console.log(ativos); 
// O JS cria um novo vetor apenas com a Ana e a Beatriz automaticamente!
