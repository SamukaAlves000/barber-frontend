import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.scss']
})
export class PessoaUpdateComponent implements OnInit {

  pessoaForm: FormGroup;
  dateFormCtrl: FormControl;

  constructor(private router: Router, private pessoaService: PessoaService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.pessoaForm = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      nome: ['', Validators.required],
      email: ['', Validators.email],
      cpf: [''],
      fone: [''],
      cidade: [''],
      uf: [''],
      sexo: [''],
      dataNasc: [''],
    });

    const id = this.route.snapshot.paramMap.get('idUsuario');
    this.pessoaService.getById(id).subscribe(pessoa => {
        this.pessoaForm.patchValue(pessoa);
        this.dateFormCtrl = new FormControl({});
        if (pessoa.dataNasc !== null) {
          this.dateFormCtrl = new FormControl(this.dateToFront(pessoa.dataNasc));
        }
      }
    );
  }

  updateUsuario(): void {
    this.pessoaForm.value.id = this.pessoaForm.controls.id.value;
    this.setDataNascimento();
    this.pessoaService.update(this.pessoaForm.value).subscribe(res => {
        this.pessoaService.showMessage('Usuário ATUALIZADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/usuarios']);
  }

  setDataNascimento(): void {
      if (this.dateFormCtrl.dirty) {
        if (this.dateFormCtrl.value !== null) {
          this.pessoaForm.value.dataNasc = this.dateToBack(this.dateFormCtrl.value);
        } else {
          this.pessoaForm.value.dataNasc = null;
        }
      }
  }

  dateToBack(data: Date): string {
    const date = data.toLocaleDateString().split('/');
    return date[2] + '-' + date[1] + '-' + date[0];
  }

  dateToFront(data: string): Date {
    const date = data.split('-');
    return new Date(Number(date[0]) , Number(date[1]) - 1, Number(date[2]));
  }
}
