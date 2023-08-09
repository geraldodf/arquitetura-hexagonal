import ProvedorDeEstilos from "../core/ports/ProvedorDeEstilos";

export default class Udemy implements ProvedorDeEstilos {
  aplicarNegrito(texto: string): string {
    return `<b>${texto}</b>.Udemy`;
  }
  aplicarItalico(texto: string): string {
    return `<i>${texto}</i>.Udemy`;
  }
  aplicarCodigo(texto: string): string {
    return `<code>${texto}</code>.Udemy`;
  }
}
