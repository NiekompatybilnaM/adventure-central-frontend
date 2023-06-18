import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachRelaxComponent } from './beach-relax.component';

describe('BeachRelaxComponent', () => {
  let component: BeachRelaxComponent;
  let fixture: ComponentFixture<BeachRelaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachRelaxComponent]
    });
    fixture = TestBed.createComponent(BeachRelaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
