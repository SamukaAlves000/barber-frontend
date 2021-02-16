import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadAceitoConfirmadoComponent } from './agendamento-read-aceito-confirmado.component';

describe('AgendamentoReadAceitoConfirmadoComponent', () => {
  let component: AgendamentoReadAceitoConfirmadoComponent;
  let fixture: ComponentFixture<AgendamentoReadAceitoConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadAceitoConfirmadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadAceitoConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
