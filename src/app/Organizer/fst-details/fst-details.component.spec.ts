import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstDetailsComponent } from './fst-details.component';

describe('FstDetailsComponent', () => {
  let component: FstDetailsComponent;
  let fixture: ComponentFixture<FstDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FstDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
