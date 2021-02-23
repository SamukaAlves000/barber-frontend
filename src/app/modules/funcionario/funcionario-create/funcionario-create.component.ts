import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionarioForm: FormGroup;

  constructor(private router: Router,
              private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.funcionarioForm = this.formBuilder.group({
      salario: ['', Validators.required],
      pessoa: this.formBuilder.group({
        nome: ['', Validators.required],
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
    this.setDataNascimento();
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

}
