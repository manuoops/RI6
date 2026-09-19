import { Calculadora } from "./Calculadora"
import { Operacao } from "./operacoes/Operacao"
import { Soma } from "./operacoes/Soma"
import { Subtracao } from "./operacoes/Subtracao"
import { Divisao } from "./operacoes/Divisao"
import { Multiplicacao } from "./operacoes/Multiplicacao"
import { Potenciacao } from "./operacoes/Potenciacao"
import { Radiciacao } from "./operacoes/Radiciacao"
import { Bhaskara } from "./Bhaskara"
import { perguntar, fecharInterface } from "./utils/perguntar"

async function main(): Promise<void> {
  console.log("CALCULADORA ESPECIAL:")
  console.log("1 - Soma")
  console.log("2 - Subtração")
  console.log("3 - Multiplicação")
  console.log("4 - Divisão")
  console.log("5 - Potenciação")
  console.log("6 - Radiciação")
  console.log("7 - Bhaskara (equação de 2º grau)")

  const escolha = await perguntar("Escolha a operação (1-7): ")

  if (escolha === "7") {
    const coefA = Number(await perguntar("Digite o coeficiente 'a': "))
    const coefB = Number(await perguntar("Digite o coeficiente 'b': "))
    const coefC = Number(await perguntar("Digite o coeficiente 'c': "))

    try {
      const bhaskara = new Bhaskara(coefA, coefB, coefC)
      const raizes = bhaskara.calcularRaizes()

      if (raizes.length === 0) {
        console.log("A equação não possui raízes reais.")
      } else if (raizes.length === 1) {
        console.log(`Raiz única: ${raizes[0]}`)
      } else {
        console.log(`Raízes: ${raizes[0]} e ${raizes[1]}`)
      }
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(`Erro: ${erro.message}`)
      }
    }

    fecharInterface()
    return
  }

  // to sem ideia de easteregg, professor

  const numeroA = Number(await perguntar("Digite o primeiro número: "))
  const numeroB = Number(await perguntar("Digite o segundo número: "))

  let operacao: Operacao

  switch (escolha) {
    case "1":
      operacao = new Soma()
      break
    case "2":
      operacao = new Subtracao()
      break
    case "3":
      operacao = new Multiplicacao()
      break
    case "4":
      operacao = new Divisao()
      break
    case "5":
      operacao = new Potenciacao()
      break
    case "6":
      operacao = new Radiciacao()
      break
    default:
      console.log("Opção inválida!")
      fecharInterface()
      return
  }

  const calculadora = new Calculadora(numeroA, numeroB)

  try {
    const resultado = calculadora.calcular(operacao)
    console.log(`Resultado da ${operacao.getNome()}: ${resultado}`)
  } catch (erro) {
    if (erro instanceof Error) {
      console.log(`Erro: ${erro.message}`)
    }
  }

  fecharInterface()
}

main()