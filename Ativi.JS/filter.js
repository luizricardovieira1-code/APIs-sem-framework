// Filtra os usuários ativos usando o método filter()
function filtrarUsuariosAtivos(usuariosAPI) {
    let ativos = usuariosAPI.filter(usuario => usuario.ativo === true);
    console.log(ativos); 
    // O JS cria um novo vetor apenas com a Ana e a Beatriz automaticamente!
}

//ambos códigos fazem a mesma coisa, mas o primeiro é mais moderno e enxuto, enquanto o segundo é mais antigo e verboso.
function filtrarUsuariosAtivos(usuariosAPI) {
    for (let i = 0; i < usuariosAPI.length; i++) {
        if (usuariosAPI[i].ativo===true) {
            console.log(`${usuariosAPI[i].nome}`)
        }
    }
}