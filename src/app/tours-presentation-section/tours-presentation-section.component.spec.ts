import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursPresentationSectionComponent } from './tours-presentation-section.component';

describe('ToursPresentationSectionComponent', () => {
  let component: ToursPresentationSectionComponent;
  let fixture: ComponentFixture<ToursPresentationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToursPresentationSectionComponent]
    });
    fixture = TestBed.createComponent(ToursPresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
