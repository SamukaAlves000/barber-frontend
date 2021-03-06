import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';
import {MatDialog} from '@angular/material/dialog';
import {AgendamentoReadDialogComponent} from '../agendamento-read-dialog/agendamento-read-dialog.component';

@Component({
  selector: 'app-agendamento-read-cancelado',
  templateUrl: './agendamento-read-cancelado.component.html',
  styleUrls: ['./agendamento-read-cancelado.component.scss']
})
export class AgendamentoReadCanceladoComponent implements OnInit, OnChanges{

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  agendamentos: Agendamento[];
  agendamento: Agendamento;
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);
  @Input() atualizaStatus;
  @Output() atualizaStatusEleito = new EventEmitter<string>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agendamentoService: AgendamentoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarListaDeAgendamentos();
  }

  openDialog(id: number): void {
    this.agendamentoService.getById(id).subscribe(agendamento => {
      this.agendamento = agendamento;
      const dialogRef = this.dialog.open(AgendamentoReadDialogComponent, {
        width: this.isMobile ? '100%' : '50%',
        data: {agendamento: this.agendamento, buttonsLabels: [], flagButton: false}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        }
      );
    });
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
      this.atualizaStatusEleito = undefined;
    }
  }

}
