import {Funcionario} from './Funcionario';

export interface Pessoa {
  id?: number;
  nome?: string;
  email?: string;
  cpf?: string;
  fone?: string;
  cidade?: string;
  uf?: string;
  sexo?: string;
  dataNasc?: string;
  funcionario?: Funcionario;
}
