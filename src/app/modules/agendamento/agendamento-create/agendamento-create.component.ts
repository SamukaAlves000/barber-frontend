import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../../funcionario/funcionario';
import {FuncionarioService} from '../../funcionario/funcionario.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatListOption, MatSelectionListChange} from '@angular/material/list';
import {Agendamento} from '../agendamento';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.scss']
})
export class AgendamentoCreateComponent implements OnInit {

  typesOfShoes: string[] = ['Kaio', 'Samuel', 'Bruno'];
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

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
    });
  }

  cancel() {
  }

  setFuncionario(funcionarioSelecionado: Funcionario): void{
      this.agendamento.funcionario = funcionarioSelecionado;
  }

  createAgendamento() {

  }
}
