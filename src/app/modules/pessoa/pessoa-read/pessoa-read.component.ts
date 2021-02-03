import {Component, OnInit, ViewChild} from '@angular/core';
import {Pessoa} from '../../pessoa/pessoa';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PessoaService} from '../../pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.scss']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] = [];

  displayedColumns: string[] = ['id', 'nome', 'fone', 'cidade', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe((data: Pessoa[]) => {
      console.log(data);
      this.pessoas = data;
      this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas); // Set dataSource  like this
      this.dataSource.paginator = this.paginator;
    });
  }
}
