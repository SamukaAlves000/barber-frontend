import {Pessoa} from '../pessoa/pessoa';
import {ServicoFuncionario} from './servico-funcionario';

export interface Funcionario {
  id?: number;
  salario?: number;
  pessoa?: Pessoa;
  servicos?: ServicoFuncionario;
}
