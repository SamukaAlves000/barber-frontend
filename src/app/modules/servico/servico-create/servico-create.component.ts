import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ServicoService} from '../servico.service';
import {Servico} from '../servico';
import {Router} from '@angular/router';

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

  servico: Servico = {
    descricao: 'Teste',
    duracao: 45,
    valor: 20
  };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  inputTextFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private servicoService: ServicoService, private router: Router) { }

  ngOnInit(): void {
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
}
