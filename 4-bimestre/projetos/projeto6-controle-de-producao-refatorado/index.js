// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()
console.log("=== Sistema de Controle de Produção ===")

let quantidadeDeDias = parseInt(prompt("Quantos dias deseja registrar? "))
let producao = []
let totalProduzido = 0
let maiorProducao = 0
let menorProducao = 0
let diaMaiorProducao = 0
let diaMenorProducao = 0

// Registro da produção diária
for (let i = 0; i < quantidadeDeDias; i++) {
  let quantidadeProduzida = parseInt(prompt(`Digite a quantidade produzida no dia ${i + 1}: `))
  producao.push(quantidadeProduzida)
  totalProduzido += quantidadeProduzida

  if (i === 0) {
    maiorProducao = quantidadeProduzida
    menorProducao = quantidadeProduzida
    diaMaiorProducao = 1
    diaMenorProducao = 1
  } else {
    if (quantidadeProduzida > maiorProducao) {
      maiorProducao = quantidadeProduzida
      diaMaiorProducao = i + 1
    }
    if (quantidadeProduzida < menorProducao) {
      menorProducao = quantidadeProduzida
      diaMenorProducao = i + 1
    }
  }
}

let mediaDiaria = totalProduzido / quantidadeDeDias

// Ordenação crescente (manual)
let ordemCrescente = [...producao]
for (let i = 0; i < ordemCrescente.length; i++) {
  for (let j = i + 1; j < ordemCrescente.length; j++) {
    if (ordemCrescente[i] > ordemCrescente[j]) {
      let temporario = ordemCrescente[i]
      ordemCrescente[i] = ordemCrescente[j]
      ordemCrescente[j] = temporario
    }
  }
}

// Ordenação decrescente (manual)
let ordemDecrescente = [...producao]
for (let i = 0; i < ordemDecrescente.length; i++) {
  for (let j = i + 1; j < ordemDecrescente.length; j++) {
    if (ordemDecrescente[i] < ordemDecrescente[j]) {
      let temporario = ordemDecrescente[i]
      ordemDecrescente[i] = ordemDecrescente[j]
      ordemDecrescente[j] = temporario
    }
  }
}

// Exibição do relatório final
console.log(`
--- RELATÓRIO DE PRODUÇÃO ---
Produção registrada: ${producao}
Total produzido: ${totalProduzido}
Média diária: ${mediaDiaria.toFixed(2)}
Maior produção: ${maiorProducao} (dia ${diaMaiorProducao})
Menor produção: ${menorProducao} (dia ${diaMenorProducao})
Ordem crescente: ${ordemCrescente}
Ordem decrescente: ${ordemDecrescente}
${mediaDiaria >= maiorProducao / 2 ? "Produção estável!" : "Produção abaixo do ideal."}
`)