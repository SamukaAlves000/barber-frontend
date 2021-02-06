import {Funcionario} from '../funcionario/funcionario';
import {Servico} from '../servico/servico';
import {Pessoa} from '../pessoa/pessoa';

export interface Agendamento {
  id?: number;
  dataAgendamento: string;
  horario: string;
  status: string;
  avaliacao: number;
  funcionario: Funcionario;
  servico: Servico;
  pessoa: Pessoa;
}
