import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoCreateComponent } from './servico-create/servico-create.component';
import { ServicoUpdateComponent } from './servico-update/servico-update.component';
import { ServicoDeleteComponent } from './servico-delete/servico-delete.component';
import { ServicoReadComponent } from './servico-read/servico-read.component';
import { ServicoComponent } from './servico.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ServicoService} from './servico.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [ServicoCreateComponent, ServicoUpdateComponent, ServicoDeleteComponent, ServicoReadComponent],
  exports: [
    ServicoReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    ServicoService
  ]
})
export class ServicoModule { }
