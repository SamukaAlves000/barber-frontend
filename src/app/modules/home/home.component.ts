import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // slides = [{image: 'https://gsr.dev/material2-carousel/assets/demo.png'}, {image: 'https://gsr.dev/material2-carousel/assets/demo.png'},
  //    {image: 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  slides = [{image: 'assets/images/carrosel/1.jpg'}, {image: 'assets/images/carrosel/2.jpg'},
    {image: 'assets/images/carrosel/3.jpg'}];

  profissionais = [{image: 'assets/images/profissionais/c1.png'}, {image: 'assets/images/profissionais/c2.jpg'},
    {image: 'assets/images/profissionais/c3.jpg'}];

  produtos = [
    {image: 'assets/images/produtos/p1.jpg'},
    {image: 'assets/images/produtos/p2.jpg'},
    {image: 'assets/images/produtos/p3.jpg'},
    {image: 'assets/images/produtos/p4.jpg'},
    {image: 'assets/images/produtos/p5.jpg'},
    {image: 'assets/images/produtos/p6.jpg'},
    {image: 'assets/images/produtos/p7.jpg'},
    {image: 'assets/images/produtos/p8.jpg'},
    {image: 'assets/images/produtos/p9.jpg'}];

   cards = [
       {
         icon: 'home',
         title: 'Inicío',
         router: '/',
         color: '#3F51B5'
       },
       {
         icon: 'dashboard',
         title: 'Dashboard',
         router: '/dashboard',
         color: '#4CAF50'
       },
       {
         icon: 'view_agenda',
         title: 'Agenda',
         router: '/agendamentos',
         color: '#9C27B0'
       },
       {
         icon: 'engineering',
         title: 'Funcionário',
         router: '/funcionarios',
         color: '#F44336'
       },
       {
         icon: 'person',
         title: 'Usuário',
         router: '/usuarios',
         color: '#009688'
       },
       {
         icon: 'miscellaneous_services',
         title: 'Serviços',
         router: '/servicos',
         color: ''
       }
     ];

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigateToRota(rota: string): void {
    this.router.navigate([rota]);
  }

}
