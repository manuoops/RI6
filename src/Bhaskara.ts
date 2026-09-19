export class Bhaskara {
  private coefA: number
  private coefB: number
  private coefC: number

  constructor(coefA: number, coefB: number, coefC: number) {
    if (coefA === 0) {
      throw new Error("O coeficiente 'a' não pode ser zero!")
    }
    this.coefA = coefA
    this.coefB = coefB
    this.coefC = coefC
  }

  private calcularDelta(): number {
    return Math.pow(this.coefB, 2) - 4 * this.coefA * this.coefC
  }

  public calcularRaizes(): number[] {
    const delta = this.calcularDelta()

    if (delta < 0) {
      return []
    }

    if (delta === 0) {
      const raizUnica = -this.coefB / (2 * this.coefA)
      return [raizUnica]
    }

    const raizDelta = Math.sqrt(delta)
    const raiz1 = (-this.coefB + raizDelta) / (2 * this.coefA)
    const raiz2 = (-this.coefB - raizDelta) / (2 * this.coefA)
    return [raiz1, raiz2]
  }
}