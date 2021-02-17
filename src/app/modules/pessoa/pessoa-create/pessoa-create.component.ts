import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa';
import {Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.scss']
})
export class PessoaCreateComponent implements OnInit {

  pessoaForm: FormGroup;

  pessoa: Pessoa = {
    nome: undefined,
    email: undefined,
    cpf: undefined,
    fone: undefined,
    cidade: undefined,
    uf: undefined,
    sexo: undefined,
    dataNasc: undefined
  };

  constructor(private router: Router,
              private pessoaService: PessoaService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pessoaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      cpf: [''],
      fone: [''],
      cidade: [''],
      uf: [''],
      sexo: [''],
      dataNasc: [ new Date()],
    });
  }

  createUsuario(): void {
    this.setDataNascimento();
    this.pessoaService.create(this.pessoaForm.value).subscribe(res => {
        this.pessoaService.showMessage('Usuário CRIADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/usuarios']);
  }

  setDataNascimento(): void {
    const data = this.pessoaForm.value.dataNasc.toLocaleDateString().split('/');
    this.pessoaForm.value.dataNasc = data[2] + '-' + data[1] + '-' + data[0];
  }
}
