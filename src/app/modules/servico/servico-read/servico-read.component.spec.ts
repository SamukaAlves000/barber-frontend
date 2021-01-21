import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoReadComponent } from './servico-read.component';

describe('ServicoReadComponent', () => {
  let component: ServicoReadComponent;
  let fixture: ComponentFixture<ServicoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
