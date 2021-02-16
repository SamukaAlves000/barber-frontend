import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadCanceladoComponent } from './agendamento-read-cancelado.component';

describe('AgendamentoReadCanceladoComponent', () => {
  let component: AgendamentoReadCanceladoComponent;
  let fixture: ComponentFixture<AgendamentoReadCanceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadCanceladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadCanceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
