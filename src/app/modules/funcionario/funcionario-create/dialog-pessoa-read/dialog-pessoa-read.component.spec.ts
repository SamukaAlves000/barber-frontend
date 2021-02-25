import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPessoaReadComponent } from './dialog-pessoa-read.component';

describe('DialogPessoaReadComponent', () => {
  let component: DialogPessoaReadComponent;
  let fixture: ComponentFixture<DialogPessoaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPessoaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPessoaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
