import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFestComponent } from './view-fest.component';

describe('ViewFestComponent', () => {
  let component: ViewFestComponent;
  let fixture: ComponentFixture<ViewFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
