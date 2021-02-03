import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {DashboardService} from '../../modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ServicoComponent} from '../../modules/servico/servico.component';
import {MatButtonModule} from '@angular/material/button';
import {ServicoModule} from '../../modules/servico/servico.module';
import {ServicoService} from '../../modules/servico/servico.service';
import {MatIconModule} from '@angular/material/icon';
import {HomeComponent} from '../../modules/home/home.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {PessoaComponent} from '../../modules/pessoa/pessoa.component';
import {PessoaModule} from '../../modules/pessoa/pessoa.module';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ServicoComponent,
    HomeComponent,
    PessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    ServicoModule,
    MatIconModule,
    MatCarouselModule,
    PessoaModule
  ],
  providers: [
    DashboardService,
    ServicoService
  ]
})
export class DefaultModule { }
