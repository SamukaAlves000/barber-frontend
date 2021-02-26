import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadDialogComponent } from './agendamento-read-dialog.component';

describe('AgendamentoReadDialogComponent', () => {
  let component: AgendamentoReadDialogComponent;
  let fixture: ComponentFixture<AgendamentoReadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoReadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoReadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
