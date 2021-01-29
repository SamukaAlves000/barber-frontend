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



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ServicoComponent
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
        MatIconModule
    ],
  providers: [
    DashboardService,
    ServicoService
  ]
})
export class DefaultModule { }
