import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Funcionario} from '../../funcionario/funcionario';
import {FuncionarioService} from '../../funcionario/funcionario.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatListOption, MatSelectionListChange} from '@angular/material/list';
import {Agendamento} from '../agendamento';
import {Servico} from '../../servico/servico';
import {ServicoService} from '../../servico/servico.service';
import {Pessoa} from '../../pessoa/pessoa';
import {AgendamentoService} from '../agendamento.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.scss']
})
export class AgendamentoCreateComponent implements OnInit {

  agendamento: Agendamento = {
    avaliacao: 0,
    dataAgendamento: '',
    horario: '',
    status: '',
    funcionario: undefined,
    pessoa: undefined,
    servico: undefined
  };

  funcionarios: Funcionario[];
  servicos: Servico[] = [];
  pessoas: Pessoa[] = [];

  constructor(private agendamentoService: AgendamentoService,
              private funcionarioService: FuncionarioService,
              private servicoService: ServicoService,
              private router: Router) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
    });

    this.servicoService.getAll().subscribe((data: Servico[]) => {
      console.log(data);
      this.servicos = data;
    });
  }

  cancel(): void {
    this.router.navigate(['agendamentos']);
  }

  setFuncionario(funcionarioSelecionado: Funcionario): void{
    this.agendamento.funcionario = funcionarioSelecionado;
  }

  setServico(servicoSelecionado: Servico): void{
    this.agendamento.servico = servicoSelecionado;
  }

  setPessoa(pessoaSelecionada: Pessoa): void{
    this.agendamento.pessoa = pessoaSelecionada;
  }

  createAgendamento(): void {
    this.agendamentoService.create(this.agendamento).subscribe(res => {
        this.funcionarioService.showMessage('Agendamento CRIADO!');
        this.cancel();
      }
    );
  }
}
