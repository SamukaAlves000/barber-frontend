import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicoService} from '../servico.service';
import {Servico} from '../servico';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.scss']
})
export class ServicoReadComponent implements OnInit {

  servicos: Servico[] = [];

  displayedColumns: string[] = ['id', 'descricao', 'valor', 'duracao', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.getAll().subscribe((data: Servico[]) => {
      console.log(data);
      this.servicos = data;
      this.dataSource = new MatTableDataSource<Servico>(this.servicos); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

}
