import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceDepartmentComponent } from './police-department.component';

describe('PoliceDepartmentComponent', () => {
  let component: PoliceDepartmentComponent;
  let fixture: ComponentFixture<PoliceDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
