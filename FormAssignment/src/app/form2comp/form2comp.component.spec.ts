import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2compComponent } from './form2comp.component';

describe('Form2compComponent', () => {
  let component: Form2compComponent;
  let fixture: ComponentFixture<Form2compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form2compComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Form2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
