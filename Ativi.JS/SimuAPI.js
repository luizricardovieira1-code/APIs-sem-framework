let usuariosAPI = [
    { nome: "Ana", ativo: true },
    { nome: "Carlos", ativo: false },
    { nome: "Beatriz", ativo: true }
];

function filtrarUsuariosAtivos(usuariosAPI) {
    for (let i = 0; i < usuariosAPI.length; i++) {
        if (usuariosAPI[i].ativo===true) {
            console.log(`${usuariosAPI[i].nome}`)
        }
    }
}

filtrarUsuariosAtivos(usuariosAPI)