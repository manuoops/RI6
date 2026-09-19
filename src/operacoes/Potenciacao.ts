import { Operacao } from "./Operacao"

export class Potenciacao extends Operacao {
  constructor() {
    super("Potenciação")
  }

  public executar(base: number, expoente: number): number {
    return Math.pow(base, expoente)
  }
}