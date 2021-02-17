import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './pessoa-delete/pessoa-delete.component';
import { PessoaReadComponent } from './pessoa-read/pessoa-read.component';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;





@NgModule({
  declarations: [PessoaCreateComponent, PessoaUpdateComponent, PessoaDeleteComponent, PessoaReadComponent],
  exports: [
    PessoaReadComponent,
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
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTabsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
  ]
})
export class PessoaModule { }
