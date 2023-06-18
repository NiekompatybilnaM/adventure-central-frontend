import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCouplesComponent } from './for-couples.component';

describe('ForCouplesComponent', () => {
  let component: ForCouplesComponent;
  let fixture: ComponentFixture<ForCouplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForCouplesComponent]
    });
    fixture = TestBed.createComponent(ForCouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
