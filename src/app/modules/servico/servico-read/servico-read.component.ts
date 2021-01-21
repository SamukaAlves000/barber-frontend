import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import {Servico} from '../servico';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.scss']
})
export class ServicoReadComponent implements OnInit {

  servicos: Servico[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {

    this.servicoService.getAll().subscribe((data: Servico[]) => {
      console.log(data);
      this.servicos = data;
    });
  }

}
