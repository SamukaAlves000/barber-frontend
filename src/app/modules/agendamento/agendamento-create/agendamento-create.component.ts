import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Funcionario} from '../../funcionario/funcionario';
import {FuncionarioService} from '../../funcionario/funcionario.service';
import {Agendamento} from '../agendamento';
import {Servico} from '../../servico/servico';
import {ServicoService} from '../../servico/servico.service';
import {Pessoa} from '../../pessoa/pessoa';
import {AgendamentoService} from '../agendamento.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.scss']
})
export class AgendamentoCreateComponent implements OnInit {

  dateFormCtrl = new FormControl(new Date());
  current = new Date();
  minDate = new Date(this.current.getFullYear(), new Date().getMonth(), Number(this.current.toLocaleDateString().split('/')[0]));
  maxDate = new Date(this.current.getFullYear() , 11, 31);

  agendamento: Agendamento = {
    avaliacao: 0,
    dataAgendamento: undefined,
    horario: '',
    status: '',
    funcionario: undefined,
    pessoa: undefined,
    servico: undefined
  };

  funcionarios: Funcionario[];
  servicos: Servico[] = [];
  pessoas: Pessoa[] = [];
  horarios = ['9:00 ás 10:00', '10:00 ás 12:00', '11:00 ás 12:00', '9:00 ás 10:00', '10:00 ás 12:00', '11:00 ás 12:00'];

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

  setAgendamentoDataAgendamento(): void {
    const data = this.dateFormCtrl.value.toLocaleDateString().split('/');
    this.agendamento.dataAgendamento = data[2] + '/' + data[1] + '/' + data[0];
  }

  createAgendamento(): void {
    this.setAgendamentoDataAgendamento();
    this.agendamentoService.create(this.agendamento).subscribe(res => {
        this.funcionarioService.showMessage('Agendamento CRIADO!');
        this.cancel();
      }
    );
  }


  cancel2(): void {

  }
}
