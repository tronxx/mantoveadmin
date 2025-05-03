import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectalmacenComponent } from './selectalmacen.component';

describe('SelectalmacenComponent', () => {
  let component: SelectalmacenComponent;
  let fixture: ComponentFixture<SelectalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectalmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
