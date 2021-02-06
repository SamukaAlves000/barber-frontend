import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../funcionario';
import {ActivatedRoute, Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.scss']
})
export class FuncionarioDeleteComponent implements OnInit {

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

  excluirFuncionario(): void {
    this.funcionarioService.delete(this.funcionario.id).subscribe(res => {
        this.funcionarioService.showMessage('Funcionário EXCLUÍDO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }

}
