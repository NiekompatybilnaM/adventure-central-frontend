import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCampComponent } from './children-camp.component';

describe('ChildrenCampComponent', () => {
  let component: ChildrenCampComponent;
  let fixture: ComponentFixture<ChildrenCampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenCampComponent]
    });
    fixture = TestBed.createComponent(ChildrenCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
