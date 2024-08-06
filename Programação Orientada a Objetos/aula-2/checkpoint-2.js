class EMail {
  #email;

  static #count = 0;

  constructor() {
    EMail.#count++;
    this.#email = `Funcionario ${EMail.#count}@empresa.com`;
  }

  get email() {
    return this.#email;
  }
}
