import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Funcionario} from '../funcionario';
import {MatPaginator} from '@angular/material/paginator';
import {FuncionarioService} from '../funcionario.service';
import {SelectionModel} from '@angular/cdk/collections';
import {ServicoFuncionario} from '../../servico/servico-funcionario';
import {ActivatedRoute} from '@angular/router';
import {ServicoService} from '../../servico/servico.service';
import {Servico} from '../../servico/servico';

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
  servico: Servico = {};

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<Funcionario>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService, private servicoService: ServicoService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adicionarColunas();
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.funcionarios);
      this.dataSource.paginator = this.paginator;

      const id = this.route.snapshot.paramMap.get('idServico');
      if (id !== null) {
        this.servicoService.getById(id).subscribe(servico => {
            this.servico = servico;
            this.selecaoAutomatica();
          }
        );
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
      this.selection.changed.asObservable().subscribe(value => {

        const atual: ServicoFuncionario[] = [];

        this.selection.selected.forEach(value1 => {
          const novo: ServicoFuncionario = {};
          novo.funcionario = value1;
          atual.push(novo);
        });

        this.funcionariosSelecionados.emit(atual);

      });
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
    this.servico.funcionarios.forEach(value => {
      const res = this.funcionarios.filter(value1 => value1.id === value.funcionario.id)[0];
      this.selection.select(res);
    });
  }

}
