import { Operacao } from "./Operacao"

export class Radiciacao extends Operacao {
  constructor() {
    super("Radiciação")
  }

  public executar(a: number, b: number): number {
    return Math.pow(a, 1 / b)
  }
}