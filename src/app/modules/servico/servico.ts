import {Funcionario} from '../funcionario/funcionario';

export interface Servico {
  id?: number;
  descricao: string;
  valor: number;
  duracao: number;
  funcionarios?: Funcionario[];
}
