import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Agendamento} from '../../agendamento';

@Component({
  selector: 'app-agendamento-read-dialog',
  templateUrl: './agendamento-read-dialog.component.html',
  styleUrls: ['./agendamento-read-dialog.component.scss']
})
export class AgendamentoReadDialogComponent implements OnInit {

  dataHorario: string;
  agendamento: Agendamento;
  constructor(
    public dialogRef: MatDialogRef<AgendamentoReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.agendamento = this.data.agendamento;
    this.formatarDataHorario();
  }

  formatarDataHorario(): void {
    const res = this.agendamento.horario.split('T');
    const data = res[0].split('-');
    const horario = res[1];
    this.dataHorario = data[2] + '/' + data[1 ] + '/' + data[0] + ' ' + horario;
  }
}
