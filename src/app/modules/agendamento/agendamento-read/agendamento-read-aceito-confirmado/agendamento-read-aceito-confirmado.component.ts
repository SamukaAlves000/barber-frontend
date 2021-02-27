import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';
import {MatDialog} from '@angular/material/dialog';
import {AgendamentoReadDialogComponent} from '../agendamento-read-dialog/agendamento-read-dialog.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-agendamento-read-aceito-confirmado',
  templateUrl: './agendamento-read-aceito-confirmado.component.html',
  styleUrls: ['./agendamento-read-aceito-confirmado.component.scss']
})
export class AgendamentoReadAceitoConfirmadoComponent implements OnInit, OnChanges {

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  agendamentos: Agendamento[];
  agendamento: Agendamento;
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);
  @Input() atualizaStatus;
  @Output() atualizaStatusEleito = new EventEmitter<string>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agendamentoService: AgendamentoService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.carregarListaDeAgendamentos();
  }

  openDialog(id: number): void {
    this.agendamentoService.getById(id).subscribe(agendamento => {
      this.agendamento = agendamento;
      const dialogRef = this.dialog.open(AgendamentoReadDialogComponent, {
        width: this.isMobile ? '100%' : '50%',
        data: {agendamento: this.agendamento, buttonsLabels: ['Cancelar', 'Finalizar']}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result !== ''){
          if (result){
            this.agendamento.status = 'FINALIZADO';
          }
          else {
            this.agendamento.status = 'CANCELADO';
          }
          this.agendamentoService.update(this.agendamento).subscribe(value => {
            this.agendamentoService.showMessage('Agendamento ' + this.agendamento.status + ' com sucesso!');
            this.carregarListaDeAgendamentos();
            this.atualizaStatusEleito.emit(this.agendamento.status);
          });
        }
      }
      );
    });
  }

  carregarListaDeAgendamentos(): void {
    this.agendamentoService.getAllStatus('ACEITO/CONFIRMADO').subscribe((data: Agendamento[]) => {
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.atualizaStatus.currentValue === 'ACEITO/CONFIRMADO') {
      this.carregarListaDeAgendamentos();
    }
  }
}
