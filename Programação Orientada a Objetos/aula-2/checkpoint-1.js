class ValorPositivo {
  #umValor;

  constructor(valor) {
    validade(valor, 'number');
    if (valor < 0) {
      valor = 0;
    }
    this.#umValor = valor;
  }

  get valor() {
    return this.#umValor;
  }

  set valor(umValor) {
    validade(umValor, 'number');
    if (umValor < 0) {
      umValor = 0;
    }
    this.#umValor = umValor;
  }
  toString() {
    return `Valor: ${this.valor}`;
  }
}
