import ProvedorDeEstilos from "./ports/ProvedorDeEstilos";

export default class EditarTexto {
  constructor(private provedorDeEstilos: ProvedorDeEstilos) {}

  executar(texto: string) {
    return this.provedorDeEstilos.aplicarCodigo(texto);
  }
}
