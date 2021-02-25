import {Component, Inject, OnInit} from '@angular/core';
import {Pessoa} from '../../../pessoa/pessoa';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  pessoa: Pessoa;
}

@Component({
  selector: 'app-dialog-pessoa-read',
  templateUrl: './dialog-pessoa-read.component.html',
  styleUrls: ['./dialog-pessoa-read.component.scss']
})
export class DialogPessoaReadComponent implements OnInit {

  pessoa: Pessoa = {};
  constructor(public dialogRef: MatDialogRef<DialogPessoaReadComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }


  setPessoa(pessoaSelecionada: Pessoa): void{
    this.pessoa = pessoaSelecionada;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
