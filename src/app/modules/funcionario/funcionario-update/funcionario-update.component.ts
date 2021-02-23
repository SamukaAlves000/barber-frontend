import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../funcionario';
import {ActivatedRoute, Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.scss']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionarioForm: FormGroup;
  dateFormCtrl: FormControl;

  constructor(private router: Router,
              private funcionarioService: FuncionarioService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.funcionarioForm = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      salario: ['', Validators.required],
      pessoa: this.formBuilder.group({
        id: [''],
        nome: ['', Validators.required],
        email: ['', Validators.email],
        cpf: [''],
        fone: [''],
        cidade: [''],
        uf: [''],
        sexo: [''],
        dataNasc: ['']
      }),
      servicos: [[]]
    });

    const id = this.route.snapshot.paramMap.get('idFuncionario');
    this.funcionarioService.getById(id).subscribe(funcionario => {
        this.funcionarioForm.patchValue(funcionario);
        this.dateFormCtrl = new FormControl({});
        if (this.funcionarioForm.value.pessoa.dataNasc !== null) {
          this.dateFormCtrl = new FormControl(this.dateToFront(funcionario.pessoa.dataNasc));
        }
      }
    );
  }

  updateFuncionario(): void {
    this.funcionarioForm.value.id = this.funcionarioForm.controls.id.value;
    this.setDataNascimento();
    this.funcionarioService.update(this.funcionarioForm.value).subscribe(res => {
        this.funcionarioService.showMessage('Funcionário ATUALIZADO!');
        this.cancel();
      }
    );
  }
  cancel(): void{
    this.router.navigate(['/funcionarios']);
  }

  setDataNascimento(): void {
    if (this.dateFormCtrl.dirty) {
      if (this.dateFormCtrl.value !== null) {
        this.funcionarioForm.value.pessoa.dataNasc = this.dateToBack(this.dateFormCtrl.value);
      } else {
        this.funcionarioForm.value.pessoa.dataNasc = null;
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
