import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';

@Component({
  selector: 'app-agendamento-read-cancelado',
  templateUrl: './agendamento-read-cancelado.component.html',
  styleUrls: ['./agendamento-read-cancelado.component.scss']
})
export class AgendamentoReadCanceladoComponent implements OnInit, OnChanges{

  agendamentos: Agendamento[];
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);
  @Input() atualizaStatus;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.carregarListaDeAgendamentos();
  }

  carregarListaDeAgendamentos(): void {
    this.agendamentoService.getAllStatus('CANCELADO').subscribe((data: Agendamento[]) => {
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.atualizaStatus.currentValue === 'CANCELADO') {
      this.carregarListaDeAgendamentos();
    }
  }

}
