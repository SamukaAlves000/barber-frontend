import {ServicoFuncionario} from './servico-funcionario';

export interface Servico {
  id?: number;
  descricao?: string;
  valor?: number;
  duracao?: number;
  funcionarios?: ServicoFuncionario[];
}
