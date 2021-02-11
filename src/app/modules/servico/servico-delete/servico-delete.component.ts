import { Component, OnInit } from '@angular/core';
import {Servico} from '../servico';
import {ServicoService} from '../servico.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.scss']
})
export class ServicoDeleteComponent implements OnInit {

  servico: Servico;


  constructor(private servicoService: ServicoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('idServico');
    this.servicoService.getById(id).subscribe(servico => {
        console.log(servico);
        this.servico = servico;
        console.log(this.servico);
      }
    );
  }

  deleteServico(): void {
    this.servicoService.delete(this.servico.id).subscribe(() => {
        this.servicoService.showMessage('Serviço EXCLUÍDO!');
        this.cancel();
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/servicos']);
  }
}
