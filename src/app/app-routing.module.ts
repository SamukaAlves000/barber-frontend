import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ServicoComponent} from './modules/servico/servico.component';
import {ServicoCreateComponent} from './modules/servico/servico-create/servico-create.component';
import {ServicoDeleteComponent} from './modules/servico/servico-delete/servico-delete.component';
import {ServicoUpdateComponent} from './modules/servico/servico-update/servico-update.component';
import {HomeComponent} from './modules/home/home.component';
import {PessoaComponent} from './modules/pessoa/pessoa.component';
import {PessoaCreateComponent} from './modules/pessoa/pessoa-create/pessoa-create.component';
import {PessoaUpdateComponent} from './modules/pessoa/pessoa-update/pessoa-update.component';
import {PessoaDeleteComponent} from './modules/pessoa/pessoa-delete/pessoa-delete.component';
import {FuncionarioComponent} from './modules/funcionario/funcionario.component';
import {FuncionarioCreateComponent} from './modules/funcionario/funcionario-create/funcionario-create.component';
import {FuncionarioUpdateComponent} from './modules/funcionario/funcionario-update/funcionario-update.component';
import {FuncionarioDeleteComponent} from './modules/funcionario/funcionario-delete/funcionario-delete.component';
import {AgendamentoComponent} from './modules/agendamento/agendamento.component';
import {AgendamentoCreateComponent} from './modules/agendamento/agendamento-create/agendamento-create.component';
import {AgendamentoDeleteComponent} from './modules/agendamento/agendamento-delete/agendamento-delete.component';
import {AgendamentoUpdateComponent} from './modules/agendamento/agendamento-update/agendamento-update.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'page1',
        component: PostsComponent
      },
      {
        path: 'servicos',
        component: ServicoComponent
      },
      {
        path: 'servicos/create',
        component: ServicoCreateComponent
      },
      {
        path: 'servicos/delete/:idServico',
        component: ServicoDeleteComponent
      },
      {
        path: 'servicos/update/:idServico',
        component: ServicoUpdateComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'usuarios',
        component: PessoaComponent
      },
      {
        path: 'usuarios/create',
        component: PessoaCreateComponent
      },
      {
        path: 'usuarios/update/:idUsuario',
        component: PessoaUpdateComponent
      },
      {
        path: 'usuarios/delete/:idUsuario',
        component: PessoaDeleteComponent
      },
      {
        path: 'funcionarios',
        component: FuncionarioComponent
      },
      {
        path: 'funcionarios/create',
        component: FuncionarioCreateComponent
      },
      {
        path: 'funcionarios/update/:idFuncionario',
        component: FuncionarioUpdateComponent
      },
      {
        path: 'funcionarios/delete/:idFuncionario',
        component: FuncionarioDeleteComponent
      },
      {
        path: 'agendamentos',
        component: AgendamentoComponent
      },
      {
        path: 'agendamentos/create',
        component: AgendamentoCreateComponent
      },
      {
        path: 'agendamentos/delete/:idAgendamento',
        component: AgendamentoDeleteComponent
      },
      {
        path: 'agendamentos/update/:idAgendamento',
        component: AgendamentoUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
