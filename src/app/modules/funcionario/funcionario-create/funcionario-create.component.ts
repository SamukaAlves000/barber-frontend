import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {Funcionario} from '../funcionario';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']
})
export class FuncionarioCreateComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  funcionario: Funcionario = {
    salario: undefined,
    pessoa: {
      nome: undefined,
      email: undefined,
      cpf: undefined,
      fone: undefined,
      cidade: undefined,
      uf: undefined,
      sexo: undefined,
      dataNasc: undefined
    },
    servicos: undefined
  };

  constructor(private router: Router,
              private funcionarioService: FuncionarioService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createFuncionario(): void {
    this.funcionarioService.create(this.funcionario).subscribe(res => {
        this.funcionarioService.showMessage('Funcionário CRIADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }

}
