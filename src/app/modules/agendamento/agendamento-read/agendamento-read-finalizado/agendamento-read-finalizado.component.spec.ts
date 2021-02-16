import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadFinalizadoComponent } from './agendamento-read-finalizado.component';

describe('AgendamentoReadFinalizadoComponent', () => {
  let component: AgendamentoReadFinalizadoComponent;
  let fixture: ComponentFixture<AgendamentoReadFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadFinalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
