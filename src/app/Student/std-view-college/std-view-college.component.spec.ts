import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdViewCollegeComponent } from './std-view-college.component';

describe('StdViewCollegeComponent', () => {
  let component: StdViewCollegeComponent;
  let fixture: ComponentFixture<StdViewCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdViewCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdViewCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
