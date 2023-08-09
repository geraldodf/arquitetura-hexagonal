import ProvedorDeEstilos from "../core/ports/ProvedorDeEstilos";

export default class FormacaoDev implements ProvedorDeEstilos {
  aplicarNegrito(texto: string): string {
    return `<b>${texto}</b>.Formacao`;
  }
  aplicarItalico(texto: string): string {
    return `<i>${texto}</i>.Formacao`;
  }
  aplicarCodigo(texto: string): string {
    return `<code>${texto}</code>.Formacao`;
  }
}
