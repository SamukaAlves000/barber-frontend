import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Funcionario} from '../funcionario';
import {MatPaginator} from '@angular/material/paginator';
import {FuncionarioService} from '../funcionario.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ServicoFuncionario} from '../../servico/servico-funcionario';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[];
  @Output() funcionarioSelecionado = new EventEmitter<Funcionario>();
  @Output() funcionariosSelecionados = new EventEmitter<ServicoFuncionario[]>();
  @Input() isMostrarColunaSelect = false;
  @Input() isMostrarColunaAction = false;
  @Input() isMostrarColunaNone = false;
  @Input() isMostrarColunaSalario = false;
  @Input() isSelecaoMultipla = false;
  @Input() isSelecaoAutomatica = false;
  @Input() selecionados: ServicoFuncionario[] = [];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Funcionario>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.adicionarColunas();
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.funcionarios); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
      if (this.isSelecaoAutomatica) {
        this.selecaoAutomatica();
      }
    });
  }

  selecionarFuncionario(funcionario: Funcionario): void {
    if (!this.isSelecaoMultipla) {
      this.funcionarioSelecionado.emit(funcionario);
      if (this.selection.selected.length === 1) {
          this.selection.deselect(this.selection.selected[0]);
      }
    }else {

      let index = -1;
      for (let i = 0; i < this.selecionados.length; i++) {
        if (this.selecionados[i].funcionario.id === funcionario.id) {
          index = i;
        }
      }

      if (index === -1) {
          this.selecionados.push(this.novoFuncionario(funcionario));
      }else{
          this.selecionados.splice(index, 1);
      }
      this.funcionariosSelecionados.emit(this.selecionados);
    }
  }

  adicionarColunas(): void {
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

  novoFuncionario(funcionario: Funcionario): ServicoFuncionario {
    const servicoFuncionario: ServicoFuncionario = {};
    servicoFuncionario.funcionario = funcionario;
    return servicoFuncionario;
  }

  selecaoAutomatica(): void {
    this.selecionados.forEach(value => {
      const res = this.funcionarios.filter(value1 => value1.id === value.funcionario.id)[0];
      this.selection.select(res);
    });
  }

}
