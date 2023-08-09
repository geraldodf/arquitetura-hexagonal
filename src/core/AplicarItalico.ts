import ProvedorDeEstilos from "./ports/ProvedorDeEstilos";

export default class EditarTexto {
    constructor(private provedorDeEstilos: ProvedorDeEstilos) {}
    executar(texto: string) {
        this.provedorDeEstilos.aplicarCodigo(texto);
      }
   
}