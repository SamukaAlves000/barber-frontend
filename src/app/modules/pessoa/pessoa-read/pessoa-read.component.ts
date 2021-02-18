import {Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Pessoa} from '../../pessoa/pessoa';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PessoaService} from '../../pessoa/pessoa.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.scss']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] = [];

  @Output() pessoaSelecionada = new EventEmitter<Pessoa>();
  @Input() isMostrarColunaSelect = false;
  @Input() isMostrarColunaAction = false;
  @Input() isMostrarColunaNone = false;
  @Input() isMostrarColunaFone = false;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Pessoa>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.adicionarColunas();
    this.pessoaService.getAll().subscribe((data: Pessoa[]) => {
      console.log(data);
      this.pessoas = data;
      this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

  selecionarPessoa(pessoa: Pessoa): void {
    this.pessoaSelecionada.emit(pessoa);
    if (this.selection.selected.length = 2) {
      this.selection.deselect(this.selection.selected[0]);
    }
  }

  adicionarColunas(): void {
    if (this.isMostrarColunaSelect) {
      this.displayedColumns.push('select');
    }

    if (this.isMostrarColunaNone) {
      this.displayedColumns.push('nome');
    }

    if (this.isMostrarColunaFone) {
      this.displayedColumns.push('fone');
    }

    if (this.isMostrarColunaAction) {
      this.displayedColumns.push('action');
    }
  }
}
