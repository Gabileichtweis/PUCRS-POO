import { validate, typedef } from 'bycontract';

export class Carro {
  #id;

  constructor(id) {
    validate(id, 'Number');
    if (id <= 0) {
      throw new error(`Identificador inválido: ${id}`);
    }

    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  toString() {
    let str = `id: ${this.#id}`;
    return str;
  }
}

export class Locomotiva extends Carro {
  #potencia;

  constructor(id, potencia) {
    validate(id, 'Number');
    validate(potencia, 'Number');
    super(id);

    if (potencia <= 0) {
      throw new Error('Potência inválida');
    }

    this.#potencia = potencia;
  }

  get potencia() {
    return this.#potencia;
  }

  toString() {
    return `Locomotiva - ${super.toString()}, potência: ${this.potencia}`;
  }
}

export class VagaoCarga extends Carro {
  #capCarga;

  constructor(id, capCarga) {
    validate(id, 'Number');
    validate(capCarga, 'Number');
    super(id);

    if (capCarga <= 0) {
      throw new Error('Capacidade de carga inválida');
    }

    this.#capCarga = capCarga;
  }

  get capCarga() {
    return this.#capCarga;
  }

  toString() {
    return `Vagão Carga - ${super.toString()}, capacidade: ${this.capCarga}`;
  }
}

export class VagaoPassageiro extends Carro {
  #qtdadePassageiros;

  constructor(id, qtdadePassageiros) {
    validate(id, 'Number');
    validate(qtdadePassageiros, 'Number');
    super(id);

    if (qtdadePassageiros <= 0) {
      throw new Error('Quantidade de passageiros inválida');
    }

    this.#qtdadePassageiros = qtdadePassageiros;
  }

  get qtdadePassageiros() {
    return this.#qtdadePassageiros;
  }

  toString() {
    return `Vagão Passageiros - ${super.toString()}, passageiros: ${
      this.qtdadePassageiros
    }`;
  }
}

//Refrigerado
typedef('#Refrigerado', {
  tempMinima: 'Number',
});

export function isRefrigerado(obj) {
  return 'tempMinima' in obj;
}

//Locavel
typedef('#Locavel', {
  valorLocacao: 'Number',
});

export function isLocavel(obj) {
  return 'valorLocacao' in obj;
}

export class VagaoCargaRefrigerado extends VagaoCarga {
  #tempMin;

  constructor(id, capCarga, tempMin) {
    validate(arguments, ['number', 'number', 'number']);
    super(id, capCarga);
    this.#tempMin = tempMin;
  }

  //Implementa Refrigerado
  get tempMinima() {
    return this.#tempMin;
  }

  toString() {
    return `${super.toString()}, temp minima: ${this.tempMinima}`;
  }
}

export class VagaoPassageiroLocavel extends VagaoPassageiro {
  #tempMin;
  #valorLocacao;

  constructor(id, qtdadePassageiros, tempMin, valLoc) {
    validate(id, 'Number');
    validate(qtdadePassageiros, 'Number');
    validate(tempMin, 'Number');
    validate(valLoc, 'Number');

    super(id, qtdadePassageiros);
    this.#tempMin = tempMin;
    this.#valorLocacao = valLoc;
  }

  //Implementa Refrigerado
  get tempMinima() {
    return this.#tempMin;
  }

  //Implementa Locavel
  get valorLocacao() {
    return this.#valorLocacao;
  }

  toString() {
    return `${super.toString()}, temp minima: ${
      this.tempMinima
    }, valor locação: ${this.#valorLocacao}`;
  }
}
