import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadRecusadoComponent } from './agendamento-read-recusado.component';

describe('AgendamentoReadRecusadoComponent', () => {
  let component: AgendamentoReadRecusadoComponent;
  let fixture: ComponentFixture<AgendamentoReadRecusadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadRecusadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadRecusadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
