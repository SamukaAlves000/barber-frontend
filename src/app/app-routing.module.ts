import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ServicoComponent} from './modules/servico/servico.component';
import {ServicoCreateComponent} from './modules/servico/servico-create/servico-create.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'servicos',
        component: ServicoComponent
      },
      {
        path: 'servicos/create',
        component: ServicoCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
