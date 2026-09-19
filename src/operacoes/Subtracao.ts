import { Operacao } from "./Operacao"

export class Subtracao extends Operacao {
    constructor() {
        super("Subtração")
    }

    public executar(a: number, b: number): number {
        return a - b
    }
}