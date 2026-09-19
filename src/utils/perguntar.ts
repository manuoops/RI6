import * as readline from "node:readline"

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

export function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta)
    })
  })
}

export function fecharInterface(): void {
  rl.close()
}