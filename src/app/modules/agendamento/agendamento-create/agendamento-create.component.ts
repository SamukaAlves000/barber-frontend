import {Component, OnInit} from '@angular/core';
import {Funcionario} from '../../funcionario/funcionario';
import {FuncionarioService} from '../../funcionario/funcionario.service';
import {Servico} from '../../servico/servico';
import {ServicoService} from '../../servico/servico.service';
import {Pessoa} from '../../pessoa/pessoa';
import {AgendamentoService} from '../agendamento.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.scss']
})
export class AgendamentoCreateComponent implements OnInit {


  agendamentoForm: FormGroup;
  dateFormCtrl = new FormControl(new Date());
  current = new Date();
  minDate = new Date(this.current.getFullYear(), new Date().getMonth(), Number(this.current.toLocaleDateString().split('/')[0]));
  maxDate = new Date(this.current.getFullYear() , 11, 31);
  horario = undefined;

  horariosAgendados: string[] = [];

  funcionarios: Funcionario[];
  servicos: Servico[] = [];
  pessoas: Pessoa[] = [];
  horarios = [];

  constructor(private agendamentoService: AgendamentoService,
              private funcionarioService: FuncionarioService,
              private servicoService: ServicoService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.agendamentoForm = this.formBuilder.group({
      dataAgendamento: [''],
      horario: [''],
      status: ['ACEITO/CONFIRMADO'],
      avaliacao: [''],
      funcionario: [''],
      servico: [''],
      pessoa: ['']
    });

    const  data = this.dateFormCtrl.value.toLocaleDateString().split('/');
    this.gerarHorario(data);

    this.dateFormCtrl.valueChanges.subscribe(value => {
      this.gerarHorario(value.toLocaleDateString().split('/'));
    });
  }

  cancel(): void {
    this.router.navigate(['agendamentos']);
  }

  setFuncionario(funcionarioSelecionado: Funcionario): void{
    this.agendamentoForm.value.funcionario = funcionarioSelecionado;
  }

  setServico(servicoSelecionado: Servico): void{
    this.agendamentoForm.value.servico = servicoSelecionado;
  }

  setPessoa(pessoaSelecionada: Pessoa): void{
    this.agendamentoForm.value.pessoa = pessoaSelecionada;
  }

  setAgendamentoDataAgendamentoAndHorario(): void {
    const data = this.dateFormCtrl.value.toLocaleDateString().split('/');
    this.agendamentoForm.value.dataAgendamento = data[2] + '-' + data[1] + '-' + data[0];
    this.agendamentoForm.value.horario = this.agendamentoForm.value.dataAgendamento + 'T' + this.horario;
  }

  createAgendamento(): void {
    this.setAgendamentoDataAgendamentoAndHorario();
    this.agendamentoService.create(this.agendamentoForm.value).subscribe(res => {
        this.funcionarioService.showMessage('Agendamento CRIADO!');
        this.cancel();
      }
    );
  }

  setHorario(horario: string): void {
    this.horario = horario;
  }

  buscarHorariosAgendados(): void {
    const datas = this.dateFormCtrl.value.toLocaleDateString().split('/');
    this.agendamentoService.getAllHorarios(datas[2] + '-' + datas[1] + '-' + datas[0]).subscribe(data => {
       this.horariosAgendados = data;
    });
  }

  gerarHorario(data): void{
    this.horarios = ['09:00:00', '10:00:00', '11:00:00', '12:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'];
    this.agendamentoService.getAllHorarios(data[2] + '-' + data[1] + '-' + data[0]).toPromise()
      .then(value => {
        this.horariosAgendados = value;
        this.horariosAgendados = this.horariosAgendados.map(value1 => value1.split('T')[1]);
        this.horarios = this.horarios.filter(value1 => this.horariosAgendados.indexOf(value1) < 0);
      });
  }
}
