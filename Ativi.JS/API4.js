fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(usuarios => {

        let listaEmails = usuarios.map(u => u.email); // O .map() passa por cada 'usuario' e extrai apenas o 'usuario.email'
        console.log(listaEmails); // Um vetor só com os emails!
    })
