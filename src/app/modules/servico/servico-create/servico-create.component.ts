import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ServicoService} from '../servico.service';
import {Servico} from '../servico';
import {Router} from '@angular/router';
import {Funcionario} from '../../funcionario/funcionario';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.scss']
})
export class ServicoCreateComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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


  constructor(private servicoService: ServicoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createServico(): void {
    this.servicoService.create(this.servico).subscribe(res => {
        this.servicoService.showMessage('Serviço CRIADO!');
        this.cancel();
      }
    );
  }

  cancel(): void{
    this.router.navigate(['/servicos']);
  }

  setFuncionariosSelecionados(funcionariosSelecionados: Funcionario[]): void{
    this.servico.funcionarios = funcionariosSelecionados;
  }
}
