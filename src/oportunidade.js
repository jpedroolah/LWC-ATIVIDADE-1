import { LightningElement, api} from "lwc";

export default class Oportunidades extends LightningElement {
  // QUESTÃO 04.
  @api oportunidade;
  @api nomeconta;
  @api valor;
  @api datfechamento;
}