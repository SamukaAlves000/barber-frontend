import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {Funcionario} from '../funcionario';
import {Pessoa} from '../../pessoa/pessoa';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']
})
export class FuncionarioCreateComponent implements OnInit {

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
    }
  };

  constructor(private router: Router, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
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
