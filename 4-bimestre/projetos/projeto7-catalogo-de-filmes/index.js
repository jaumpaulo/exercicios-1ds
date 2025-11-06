// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let filme1 = {}
let filme2 = {}
let filme3 = {}
let filme4 = {}
let filme5 = {}
let filme6 = {}
let filme7 = {}
let filme8 = {}
let filme9 = {}
let filme10 = {}

let filmes = [filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10]
let resultadoFinalFilmes = ""
let somaAvaliacao = 0
let desistencia = false
let maiorAvaliado = 0
let nomeAvalido = ""
let mediaAvaliacao = 0

for (let i = 0; i < filmes.length; i++) {
  let titulo = prompt("Digite o título do filme: ")
  let genero = prompt("Digite o gênero do filme: ")
  let ano = parseInt(prompt("Digite o ano em que o filme foi lançado: "))
  let avaliacao = parseFloat(prompt("Digite a avaliação do filme: "))

  while (avaliacao > 10 || avaliacao < 0) {
    console.log("A avaliação não pode ser maior que 10, coloque a avaliação novamente")
    avaliacao = parseFloat(prompt("Digite a avaliação do filme: "))
  }

  filmes[i].titulo = titulo
  filmes[i].genero = genero
  filmes[i].ano = ano
  filmes[i].avaliacao = avaliacao

  let continuar = prompt("Deseja adicionar mais um filme? S/N").toLowerCase()
  while (continuar == "") {
    console.log("Selecione uma opção válida!")
    continuar = prompt("Deseja adicionar mais um filme? S/N").toLowerCase()
  }
  while (continuar !== "s" && continuar !== "n") {
    console.log("Selecione uma opção válida!")
    continuar = prompt("Deseja adicionar mais um filme? S/N").toLowerCase()
  }
  resultadoFinalFilmes += `\n${i + 1}. ${filmes[i].titulo} - ${filmes[i].genero}`

  somaAvaliacao += filmes[i].avaliacao
  mediaAvaliacao = (somaAvaliacao / (i + 1)).toFixed(1)

  if (maiorAvaliado < filmes[i].avaliacao) {
    maiorAvaliado = filmes[i].avaliacao.toFixed(1)
    nomeAvalido = filmes[i].titulo
  }
  if (continuar === "N") {
    desistencia = true
    console.log("=== Catálogo de Filmes ===")
    console.log(`
      ${resultadoFinalFilmes}

      Filme mais bem avaliado:
      ${nomeAvalido} (${maiorAvaliado}/10)

      Media geral das avaliações: ${mediaAvaliacao}
      `)
    break
  } else {
    console.log("Vamos adicionar mais um filme!")
  }
}

if (desistencia === false) {
  console.log("=== Catálogo de Filmes ===")
  console.log(`
      ${resultadoFinalFilmes}

      Filme mais bem avaliado:
      ${nomeAvalido} (${maiorAvaliado}/10)

      Media geral das avaliações: ${mediaAvaliacao}
      `)
}
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }