function filtrarmaioresdeidade(idade) {
    for (let i = 0; i < idade.length; i++) {
        if (idade[i] >= 18) {
            console.log(`${idade[i]}`)
}

        
    }
}
let idade = [12, 18, 22, 15, 30, 17]

filtrarmaioresdeidade(idade)