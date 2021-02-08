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
  @Input() isMostrarColunaSelecao = false;
  isMostrarAcoes = true;

  displayedColumns: string[] = ['id', 'nome', 'fone', 'cidade', 'action'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Pessoa>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    if (this.isMostrarColunaSelecao){
      this.adicionarColunaSelecao();
    }
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

  adicionarColunaSelecao(): void {
    this.isMostrarAcoes = false;
    this.displayedColumns.pop();
    this.displayedColumns[this.displayedColumns.length - 1] = 'select';
  }
}
