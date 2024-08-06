import { validate, typedef } from 'bycontract';
import nReadlines from 'n-readlines';
import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });

import * as Carros from './ClassesHierarquicas.js';
import * as Composicoes from './ClassesComposicoes.js';

let garagem = new Composicoes.Garagem('Carros.csv');
let trem = new Composicoes.Trem(garagem.retira(10));

let fim = false;
while (!fim) {
  console.log('Opções: ');
  console.log('<1> - Listar carros na garagem');
  console.log('<2> - Inserir carro no trem');
  console.log('<3> - Remover último carro do trem');
  console.log('<4> - Encerrar');
  console.log('---------------------------------');
  console.log(`Trem: ${trem.toString()}`);
  console.log('---------------------------------');
  let opcao = Number(prompt('Opção: '));
  try {
    switch (opcao) {
      case 1:
        console.log('Carros na garagem: ');
        for (let carro of garagem.carrosNaGaragem) {
          console.log(` >${carro.toString()}`);
        }
        break;
      case 2:
        let id = Number(prompt('Informe o id do carro: '));
        let carroIns = garagem.retira(id);
        if (carroIns != undefined) {
          trem.engata(carroIns);
        } else {
          console.log('Carro não encontrado');
        }
        break;
      case 3:
        let carroDes = trem.desengata();
        garagem.entra(carroDes);
        break;
      case 4:
        fim = true;
        break;
      default:
        console.log('Opção inválida!');
    }
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
}
