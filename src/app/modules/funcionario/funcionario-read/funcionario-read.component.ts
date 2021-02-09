import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Funcionario} from '../funcionario';
import {MatPaginator} from '@angular/material/paginator';
import {FuncionarioService} from '../funcionario.service';
import {Pessoa} from '../../pessoa/pessoa';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[];
  @Output() funcionarioSelecionado = new EventEmitter<Funcionario>();
  @Input() isMostrarColunaSelect = false;
  @Input() isMostrarColunaAction = false;
  @Input() isMostrarColunaNone = false;
  @Input() isMostrarColunaSalario = false;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Funcionario>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.adicionarColuna();
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.funcionarios); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

  selecionarFuncionario(funcionario: Funcionario): void {
    this.funcionarioSelecionado.emit(funcionario);
    if (this.selection.selected.length = 2) {
      this.selection.deselect(this.selection.selected[0]);
    }
  }

  adicionarColuna(): void {
    if (this.isMostrarColunaSelect) {
      this.displayedColumns.push('select');
    }

    if (this.isMostrarColunaNone) {
      this.displayedColumns.push('nome');
    }

    if (this.isMostrarColunaSalario) {
      this.displayedColumns.push('salario');
    }

    if (this.isMostrarColunaAction) {
      this.displayedColumns.push('action');
    }
  }

}
