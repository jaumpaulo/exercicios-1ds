// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
let prompt = require('prompt-sync')()

let dia = 0
let resumo = ""
let continuar = "S"
let totalGeral = 0

do {
    dia++

    console.log("Quantas peças a máquina deve produzir no turno?")
    let entrada = prompt("")

    let valor = parseInt(entrada)

    while (entrada == "" || (valor !== valor) || valor < 1) {
        console.log("Valor inválido. Digite um número maior que 0.")
        entrada = prompt("")
        valor = parseInt(entrada)
    }

    let produzidas = 0

    while (produzidas < valor) {
        produzidas++
        console.log(`Peça ${produzidas} produzida com sucesso.`)
    }

    console.log(`Total produzido: ${produzidas}`)

    if (produzidas == valor) {
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada.")
    }

    totalGeral += produzidas

    resumo += `Dia ${dia}: ${produzidas} peças produzidas\n`

    console.log("Resumo dos dias anteriores:")
    console.log(resumo)
    console.log(`Total geral: ${totalGeral} peças produzidas`)

    console.log("Deseja simular outro turno? (S/N)")
    continuar = prompt("")

} while (continuar == "S" || continuar == "s")

console.log("Encerrando sistema de produção...")