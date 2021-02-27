import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  atualizaStatusEleito: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAgendamentoCreate(): void {
    this.router.navigate(['agendamentos/create']);
  }

  atualizaAgendamentos(status: string): void {
    this.atualizaStatusEleito = status;
  }
}
