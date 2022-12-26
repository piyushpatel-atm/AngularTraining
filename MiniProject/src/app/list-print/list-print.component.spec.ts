import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrintComponent } from './list-print.component';

describe('ListPrintComponent', () => {
  let component: ListPrintComponent;
  let fixture: ComponentFixture<ListPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
