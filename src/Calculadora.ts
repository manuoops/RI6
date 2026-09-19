import { Operacao } from "./operacoes/Operacao"

export class Calculadora {
    private numeroA: number
    private numeroB: number

    constructor(numeroA: number, numeroB: number) {
        this.numeroA = numeroA
        this.numeroB = numeroB
    }

    public calcular(operacao: Operacao): number {
        return operacao.executar(this.numeroA, this.numeroB)
    }
}