import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdViewFestComponent } from './std-view-fest.component';

describe('StdViewFestComponent', () => {
  let component: StdViewFestComponent;
  let fixture: ComponentFixture<StdViewFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdViewFestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdViewFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
