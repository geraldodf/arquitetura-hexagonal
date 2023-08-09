import ProvedorDeEstilos from "../core/ports/ProvedorDeEstilos";

export default class Google implements ProvedorDeEstilos {
  aplicarNegrito(texto: string): string {
    return `<b>${texto}</b>`;
  }
  aplicarItalico(texto: string): string {
    return `<i>${texto}</i>`;
  }
  aplicarCodigo(texto: string): string {
    return `<code>${texto}</code>`;
  }
}
