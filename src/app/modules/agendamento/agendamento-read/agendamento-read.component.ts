import {Component, OnInit, ViewChild} from '@angular/core';
import {Agendamento} from '../agendamento';
import {Funcionario} from '../../funcionario/funcionario';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../agendamento.service';

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.scss']
})
export class AgendamentoReadComponent implements OnInit {

  agendamentos: Agendamento[];
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.agendamentoService.getAll().subscribe((data: Agendamento[]) => {
      console.log(data);
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

}
