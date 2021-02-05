import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa';
import {Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.scss']
})
export class PessoaCreateComponent implements OnInit {

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

  constructor(private router: Router, private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.pessoaService.create(this.pessoa).subscribe(res => {
        this.pessoaService.showMessage('Usuário CRIADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/usuarios']);
  }
}
