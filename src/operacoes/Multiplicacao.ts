import { Operacao } from "./Operacao"

export class Multiplicacao extends Operacao {
    constructor() {
        super("Multiplicação")
    }

    public executar(a: number, b: number): number {
        return a * b
    }
}