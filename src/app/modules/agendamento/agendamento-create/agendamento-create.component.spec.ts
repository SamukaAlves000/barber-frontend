import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoCreateComponent } from './agendamento-create.component';

describe('AgendamentoCreateComponent', () => {
  let component: AgendamentoCreateComponent;
  let fixture: ComponentFixture<AgendamentoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
