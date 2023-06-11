import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyBoughtSectionComponent } from './recently-bought-section.component';

describe('RecentlyBoughtSectionComponent', () => {
  let component: RecentlyBoughtSectionComponent;
  let fixture: ComponentFixture<RecentlyBoughtSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyBoughtSectionComponent]
    });
    fixture = TestBed.createComponent(RecentlyBoughtSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
