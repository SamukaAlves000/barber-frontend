import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  index: number;
  atualizaStatusEleito: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAgendamentoCreate(): void {
    this.router.navigate(['agendamentos/create']);
  }

  setIndex($event: number): void {
    this.index = $event;
  }

  atualizaAgendamentos(status: string): void {
    console.log(status);
    console.log(status);
    this.atualizaStatusEleito = status;
  }

}
