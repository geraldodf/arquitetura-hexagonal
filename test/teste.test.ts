import FormacaoDev from "../src/adapters/FormacaoDev";
import Google from "../src/adapters/Google";
import Udemy from "../src/adapters/Udemy";
import AplicarCodigo from "../src/core/AplicarCodigo";
import ProvedorDeEstilos from "../src/core/ports/ProvedorDeEstilos";

test("", () => {
  const provedor: ProvedorDeEstilos = new Google();
  const aplicarCodigo = new AplicarCodigo(provedor);
 
  expect(aplicarCodigo.executar("texto")).toBe("<code>texto</code>");
});

test("", () => {
  const provedor: ProvedorDeEstilos = new FormacaoDev();
  const aplicarCodigo = new AplicarCodigo(provedor);
 
  expect(aplicarCodigo.executar("texto")).toBe("<code>texto</code>.Formacao");
});

test("", () => {
  const provedor: ProvedorDeEstilos = new Udemy();
  const aplicarCodigo = new AplicarCodigo(provedor);
 
  expect(aplicarCodigo.executar("texto")).toBe("<code>texto</code>.Udemy");
});
