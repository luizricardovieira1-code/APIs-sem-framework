// 1. Faz a requisição (o 'response' aqui é a resposta bruta da internet)
fetch("https://exemplo.com")
  .then(response => response.json()) // 2. CONVERTE o texto bruto em JSON/Objeto JS
  .then(usuariosAPI => {
    // 3. Agora sim! usuariosAPI é um vetor real e o .length funciona
    console.log(usuariosAPI.length); 
  });
