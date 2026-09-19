export abstract class Operacao {
    protected nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    public getNome(): string {
        return this.nome
    }

    public abstract executar(a: number, b: number): number
}