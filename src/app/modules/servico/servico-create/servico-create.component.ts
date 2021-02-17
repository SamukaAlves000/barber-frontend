import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServicoService} from '../servico.service';
import {Router} from '@angular/router';
import {ServicoFuncionario} from '../servico-funcionario';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.scss']
})
export class ServicoCreateComponent implements OnInit {

  servicoForm: FormGroup;

  value = 100;

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


  constructor(private servicoService: ServicoService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.servicoForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      duracao: ['', Validators.required],
      valor: ['', Validators.required],
      funcionarios: [[]]
    });
  }

  createServico(): void {
    this.servicoService.create(this.servicoForm.value).subscribe(res => {
        this.servicoService.showMessage('Serviço CRIADO!');
        this.cancel();
      }
    );
  }

  cancel(): void{
   this.router.navigate(['/servicos']);
  }

  setFuncionariosSelecionados(funcionariosSelecionados: ServicoFuncionario[]): void{
    this.servicoForm.value.funcionarios = funcionariosSelecionados;
  }
}
