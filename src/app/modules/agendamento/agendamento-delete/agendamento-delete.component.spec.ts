import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDeleteComponent } from './agendamento-delete.component';

describe('AgendamentoDeleteComponent', () => {
  let component: AgendamentoDeleteComponent;
  let fixture: ComponentFixture<AgendamentoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
