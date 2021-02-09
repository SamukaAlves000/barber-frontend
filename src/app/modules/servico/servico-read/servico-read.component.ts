import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ServicoService} from '../servico.service';
import {Servico} from '../servico';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.scss']
})
export class ServicoReadComponent implements OnInit {

  servicos: Servico[] = [];

  @Output() servicoSelecionado = new EventEmitter<Servico>();
  @Input() isMostrarColunaSelect = false;
  @Input() isMostrarColunaAction = false;
  @Input() isMostrarColunaDescricao = false;
  @Input() isMostrarColunaValor = false;
  @Input() isMostrarColunaDuracao = false;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Servico>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.adicionarColunas();
    this.servicoService.getAll().subscribe((data: Servico[]) => {
      console.log(data);
      this.servicos = data;
      this.dataSource = new MatTableDataSource<Servico>(this.servicos); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

  selecionarServico(servico: Servico): void {
    this.servicoSelecionado.emit(servico);
    if (this.selection.selected.length = 2) {
      this.selection.deselect(this.selection.selected[0]);
    }
  }

  adicionarColunas(): void {
    if (this.isMostrarColunaSelect) {
      this.displayedColumns.push('select');
    }

    if (this.isMostrarColunaDescricao) {
      this.displayedColumns.push('descricao');
    }

    if (this.isMostrarColunaValor) {
      this.displayedColumns.push('valor');
    }

    if (this.isMostrarColunaDuracao) {
      this.displayedColumns.push('duracao');
    }

    if (this.isMostrarColunaAction) {
      this.displayedColumns.push('action');
    }
  }

}
