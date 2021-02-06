import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../funcionario';
import {ActivatedRoute, Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.scss']
})
export class FuncionarioUpdateComponent implements OnInit {

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

  constructor(private router: Router, private funcionarioService: FuncionarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idFuncionario');
    this.funcionarioService.getById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      }
    );
  }

  updateFuncionario(): void {
    this.funcionarioService.update(this.funcionario).subscribe(res => {
        this.funcionarioService.showMessage('Funcionário ATUALIZADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }
}
