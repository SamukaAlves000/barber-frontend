import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Funcionario} from '../funcionario';
import {MatPaginator} from '@angular/material/paginator';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[];

  displayedColumns: string[] = ['id', 'nome', 'fone', 'salario', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
      this.dataSource = new MatTableDataSource<Funcionario>(this.funcionarios); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }

}
