import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainLoversComponent } from './mountain-lovers.component';

describe('MountainLoversComponent', () => {
  let component: MountainLoversComponent;
  let fixture: ComponentFixture<MountainLoversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountainLoversComponent]
    });
    fixture = TestBed.createComponent(MountainLoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
