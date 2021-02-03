import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.scss']
})
export class PessoaDeleteComponent implements OnInit {

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

  constructor(private router: Router, private pessoaService: PessoaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idUsuario');
    this.pessoaService.getById(id).subscribe(pessoa => {
        this.pessoa = pessoa;
      }
    );
  }

  deleteUsuario(): void {
    this.pessoaService.delete(this.pessoa.id).subscribe(() => {
        this.pessoaService.showMessage('Usuário EXCLUÍDO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/usuarios']);
  }

}
