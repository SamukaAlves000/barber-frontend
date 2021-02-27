import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Agendamento} from '../../agendamento';

@Component({
  selector: 'app-agendamento-read-dialog',
  templateUrl: './agendamento-read-dialog.component.html',
  styleUrls: ['./agendamento-read-dialog.component.scss']
})
export class AgendamentoReadDialogComponent implements OnInit {

  agendamento: Agendamento;
  constructor(
    public dialogRef: MatDialogRef<AgendamentoReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.agendamento = this.data.agendamento;
  }
}
