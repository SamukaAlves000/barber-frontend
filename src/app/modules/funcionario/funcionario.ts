import {Pessoa} from '../pessoa/pessoa';

export interface Funcionario {
  id?: number;
  salario?: number;
  pessoa?: Pessoa;
}
