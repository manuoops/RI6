import { Operacao } from "./Operacao"

export class Soma extends Operacao {
     constructor() {
        super("Soma")
     }

     public executar(a: number, b: number): number {
        return a + b
     }
}