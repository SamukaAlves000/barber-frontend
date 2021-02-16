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
import {MatGridListModule} from '@angular/material/grid-list';
import {PessoaModule} from '../pessoa/pessoa.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FuncionarioModule} from '../funcionario/funcionario.module';
import {ServicoModule} from '../servico/servico.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { AgendamentoReadPendenteComponent } from './agendamento-read/agendamento-read-pendente/agendamento-read-pendente.component';
import { AgendamentoReadCanceladoComponent } from './agendamento-read/agendamento-read-cancelado/agendamento-read-cancelado.component';
import { AgendamentoReadRecusadoComponent } from './agendamento-read/agendamento-read-recusado/agendamento-read-recusado.component';
import { AgendamentoReadFinalizadoComponent } from './agendamento-read/agendamento-read-finalizado/agendamento-read-finalizado.component';
import { AgendamentoReadAceitoConfirmadoComponent } from './agendamento-read/agendamento-read-aceito-confirmado/agendamento-read-aceito-confirmado.component';



@NgModule({
  declarations: [
    AgendamentoCreateComponent,
    AgendamentoUpdateComponent,
    AgendamentoDeleteComponent,
    AgendamentoReadComponent,
    AgendamentoReadPendenteComponent,
    AgendamentoReadCanceladoComponent,
    AgendamentoReadRecusadoComponent,
    AgendamentoReadFinalizadoComponent,
    AgendamentoReadAceitoConfirmadoComponent],
  exports: [
    AgendamentoReadComponent,
    AgendamentoReadAceitoConfirmadoComponent,
    AgendamentoReadPendenteComponent,
    AgendamentoReadFinalizadoComponent,
    AgendamentoReadCanceladoComponent,
    AgendamentoReadRecusadoComponent
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
    MatGridListModule,
    PessoaModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FuncionarioModule,
    ServicoModule,
    MatStepperModule,
    MatTabsModule

  ]
})
export class AgendamentoModule { }
