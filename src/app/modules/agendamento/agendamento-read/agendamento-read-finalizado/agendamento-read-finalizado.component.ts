import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';

@Component({
  selector: 'app-agendamento-read-finalizado',
  templateUrl: './agendamento-read-finalizado.component.html',
  styleUrls: ['./agendamento-read-finalizado.component.scss']
})
export class AgendamentoReadFinalizadoComponent implements OnInit , OnChanges{

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
    this.agendamentoService.getAllStatus('FINALIZADO').subscribe((data: Agendamento[]) => {
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.atualizaStatus.currentValue === 'FINALIZADO') {
      this.carregarListaDeAgendamentos();
    }
  }
}
