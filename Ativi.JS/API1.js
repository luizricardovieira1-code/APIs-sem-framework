// Usamos o 'fetch' para buscar dados em uma URL (API de usuários de teste)
fetch('https://jsonplaceholder.typicode.com/users')
//detalhe que eu nn tava entendendo tanto resposta e usuarios são variáveis que eu criei, mas o JS entende
//que a primeira resposta é a resposta da API e a segunda é o vetor de objetos que vem da API.
  .then(resposta => resposta.json()) // Transforma a resposta da internet em um Array de Objetos JS
  .then(usuarios => {
      // BINGO! 'usuarios' aqui dentro é um vetor de objetos igualzinho ao do seu desafio anterior!
      
      console.log("--- LISTA DE USUÁRIOS REAIS DA API ---");
      
      // Use o seu conhecimento: faça um laço 'for' para mostrar o .name de cada usuário no console!
      for (let i = 0; i < usuarios.length; i++) {
          console.log(`Nome: ${usuarios[i].name} | Email: ${usuarios[i].email}`);
      }
  });