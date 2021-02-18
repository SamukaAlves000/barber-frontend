import { Component, OnInit } from '@angular/core';
import {Servico} from '../servico';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServicoService} from '../servico.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicoFuncionario} from '../servico-funcionario';
import {disableDebugTools} from '@angular/platform-browser';

@Component({
  selector: 'app-servico-update',
  templateUrl: './servico-update.component.html',
  styleUrls: ['./servico-update.component.scss']
})
export class ServicoUpdateComponent implements OnInit {

  servicoForm: FormGroup;

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

  constructor(private servicoService: ServicoService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.servicoForm = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      descricao: ['', Validators.required],
      duracao: ['', Validators.required],
      valor: ['', Validators.required],
      funcionarios: [[]]
    });

    const id = this.route.snapshot.paramMap.get('idServico');
    this.servicoService.getById(id).subscribe(servico => {
      this.servicoForm.patchValue(servico);
      }
    );
  }

  updateServico(): void {
    this.servicoForm.value.id = this.servicoForm.controls.id.value;
    this.servicoService.update(this.servicoForm.value).subscribe(() => {
        this.servicoService.showMessage('Serviço ATUALIZADO!');
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
