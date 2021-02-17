import { Component, OnInit } from '@angular/core';
import {Servico} from '../servico';
import {FormControl, Validators} from '@angular/forms';
import {ServicoService} from '../servico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicoFuncionario} from '../servico-funcionario';

@Component({
  selector: 'app-servico-update',
  templateUrl: './servico-update.component.html',
  styleUrls: ['./servico-update.component.scss']
})
export class ServicoUpdateComponent implements OnInit {

  servico: Servico = {
    descricao: '',
    duracao: null,
    valor: null,
    funcionarios: []
  };

  duracoes = [
    {id: 1, duracao: 15},
    {id: 2, duracao: 30},
    {id: 3, duracao: 45},
    {id: 4, duracao: 60}
  ];

  options = [
    { name: 20, value: 1 },
    { name: 30, value: 2 }
  ];

  constructor(private servicoService: ServicoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idServico');
    this.servicoService.getById(id).subscribe(servico => {
        this.servico = servico;
      }
    );
  }

  updateServico(): void {
    this.servicoService.update(this.servico).subscribe(() => {
        this.servicoService.showMessage('Serviço ATUALIZADO!');
        this.cancel();
      }
    );
  }

  cancel(): void{
    this.router.navigate(['/servicos']);
  }

  setFuncionariosSelecionados(funcionariosSelecionados: ServicoFuncionario[]): void{
    this.servico.funcionarios = funcionariosSelecionados;
  }
}
