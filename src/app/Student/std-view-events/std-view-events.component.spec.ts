import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdViewEventsComponent } from './std-view-events.component';

describe('StdViewEventsComponent', () => {
  let component: StdViewEventsComponent;
  let fixture: ComponentFixture<StdViewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdViewEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdViewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
