import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoCreateComponent } from './agendamento-create/agendamento-create.component';
import { AgendamentoUpdateComponent } from './agendamento-update/agendamento-update.component';
import { AgendamentoDeleteComponent } from './agendamento-delete/agendamento-delete.component';
import { AgendamentoReadComponent } from './agendamento-read/agendamento-read.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [AgendamentoCreateComponent, AgendamentoUpdateComponent, AgendamentoDeleteComponent, AgendamentoReadComponent],
  exports: [
    AgendamentoReadComponent
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
    MatListModule,
  ]
})
export class AgendamentoModule { }
