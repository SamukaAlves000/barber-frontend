import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.scss']
})
export class PessoaUpdateComponent implements OnInit {

  pessoa: Pessoa = {
    nome: undefined,
    email: undefined,
    cpf: undefined,
    fone: undefined,
    cidade: undefined,
    uf: undefined,
    sexo: undefined,
    dataNasc: undefined,
    funcionario: {
      salario: undefined
    }
  };

  mostrarInputSalario = false;

  constructor(private router: Router, private pessoaService: PessoaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idUsuario');
    this.pessoaService.getById(id).subscribe(pessoa => {
        this.pessoa = pessoa;
      }
    );
  }

  updateUsuario(): void {

    if (this.pessoa.funcionario.salario === undefined){
      this.pessoa.funcionario = null;
    }
    this.pessoaService.update(this.pessoa).subscribe(res => {
        this.pessoaService.showMessage('Usuário ATUALIZADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/usuarios']);
  }

  isMostrarInputSalario(isMostrar): void {
    this.mostrarInputSalario = isMostrar;
    this.pessoa.funcionario.salario = undefined;
  }
}
