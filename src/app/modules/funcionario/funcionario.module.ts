import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { FuncionarioReadComponent } from './funcionario-read/funcionario-read.component';
import { FuncionarioDeleteComponent } from './funcionario-delete/funcionario-delete.component';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DialogPessoaReadComponent } from './funcionario-create/dialog-pessoa-read/dialog-pessoa-read.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PessoaModule} from '../pessoa/pessoa.module';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;



@NgModule({
  declarations: [FuncionarioCreateComponent, FuncionarioUpdateComponent, FuncionarioReadComponent, FuncionarioDeleteComponent, DialogPessoaReadComponent],
  exports: [
    FuncionarioReadComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    MatDatepickerModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    MatDialogModule,
    PessoaModule,
  ]
})
export class FuncionarioModule { }
