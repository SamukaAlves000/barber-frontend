import {Component, OnInit, ViewChild} from '@angular/core';
import {Servico} from '../servico/servico';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ServicoService} from '../servico/servico.service';

export interface Regiao {
  nome: string;
  id: number;
  sigla: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  servicos: Regiao[] = [];

  displayedColumns: string[] = ['id', 'sigla', 'nome'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.getAllRegioes().subscribe((data: Regiao[]) => {
      console.log(data);
      this.servicos = data;
      this.dataSource = new MatTableDataSource<Regiao>(this.servicos); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

}
