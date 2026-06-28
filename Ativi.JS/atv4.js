function FormatarPrecos (precos) {
    let precosFormatados = []
    for (let i = 0; i < precos.length; i++) {
        precosFormatados.push(`R$ ${precos[i].toFixed(2)}`)
    }
    return precosFormatados
}
let precos = [10, 50.5, 100]

FormatarPrecos(precos)
console.log(FormatarPrecos(precos))