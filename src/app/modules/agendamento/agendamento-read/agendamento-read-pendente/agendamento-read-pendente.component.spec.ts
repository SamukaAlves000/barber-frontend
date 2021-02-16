import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadPendenteComponent } from './agendamento-read-pendente.component';

describe('AgendamentoReadPendenteComponent', () => {
  let component: AgendamentoReadPendenteComponent;
  let fixture: ComponentFixture<AgendamentoReadPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
