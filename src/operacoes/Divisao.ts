import { Operacao } from "./Operacao"

export class Divisao extends Operacao {
    constructor() {
        super("Divisão")
    }

    public executar(a: number, b: number): number {
        if (b == 0) {
            throw new Error("Não é possível dividir por zero!")
        }
        return a / b
    }
}