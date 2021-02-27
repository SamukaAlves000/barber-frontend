import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Agendamento} from '../../agendamento';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AgendamentoService} from '../../agendamento.service';
import {Funcionario} from '../../../funcionario/funcionario';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AgendamentoReadDialogComponent} from '../agendamento-read-dialog/agendamento-read-dialog.component';

@Component({
  selector: 'app-agendamento-read-pendente',
  templateUrl: './agendamento-read-pendente.component.html',
  styleUrls: ['./agendamento-read-pendente.component.scss']
})
export class AgendamentoReadPendenteComponent implements OnInit {

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  agendamentos: Agendamento[];
  agendamento: Agendamento;
  displayedColumns: string[] = ['id', 'cliente', 'servico', 'funcionario', 'action'];
  dataSource = new MatTableDataSource([]);
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
        data: {agendamento: this.agendamento, buttonsLabels: ['Recusar', 'Aceitar']}
      });

      dialogRef.afterClosed().subscribe(result => {
          if (result !== ''){
            if (result){
              this.agendamento.status = 'ACEITO/CONFIRMADO';
            }
            else {
              this.agendamento.status = 'RECUSADO';
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
    this.agendamentoService.getAllStatus('PENDENTE').subscribe((data: Agendamento[]) => {
      this.agendamentos = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.agendamentos);
      this.dataSource.paginator = this.paginator;
    });
  }
}
