import {Component, OnInit, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';

@Component({
  selector: 'app-agendamento-read-aceito-confirmado',
  templateUrl: './agendamento-read-aceito-confirmado.component.html',
  styleUrls: ['./agendamento-read-aceito-confirmado.component.scss']
})
export class AgendamentoReadAceitoConfirmadoComponent implements OnInit {

  agendamentos: Agendamento[];
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.agendamentoService.getAllStatus('ACEITO/CONFIRMADO').subscribe((data: Agendamento[]) => {
      console.log(data);
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

}
