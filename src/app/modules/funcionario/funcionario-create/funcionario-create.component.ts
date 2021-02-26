import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {PessoaReadComponent} from '../../pessoa/pessoa-read/pessoa-read.component';
import {DialogPessoaReadComponent} from './dialog-pessoa-read/dialog-pessoa-read.component';
import {Pessoa} from '../../pessoa/pessoa';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionarioForm: FormGroup;
  isSelecionouPessoa = false;
  pessoa: Pessoa;
  constructor(private router: Router,
              private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.funcionarioForm = this.formBuilder.group({
      salario: ['', Validators.required],
      pessoa: this.formBuilder.group({
        nome: [''],
        email: ['', Validators.email],
        cpf: [''],
        fone: [''],
        cidade: [''],
        uf: [''],
        sexo: [''],
        dataNasc: ['']
      }),
      servicos: [[]]
    });
  }

  createFuncionario(): void {
    if (this.isSelecionouPessoa){
      this.funcionarioForm.value.pessoa = this.pessoa;
    }else{
      this.setDataNascimento();
    }
    this.funcionarioService.create(this.funcionarioForm.value).subscribe(res => {
        this.funcionarioService.showMessage('Funcionário CRIADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }

  setDataNascimento(): void {
    if (this.funcionarioForm.value.pessoa.dataNasc.dirty) {
      const data = this.funcionarioForm.value.pessoa.dataNasc.toLocaleDateString().split('/');
      this.funcionarioForm.value.pessoa.dataNasc = data[2] + '-' + data[1] + '-' + data[0];
    }
  }

  buscarUsuario(): void {
    const dialogRef = this.dialog.open(DialogPessoaReadComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== ''){
        this.pessoa = result;
        this.funcionarioForm.value.pessoa = this.pessoa;
        this.isSelecionouPessoa = true;
      }
    });
  }

  teste() {
    console.log(this.funcionarioForm.value);
  }
}
