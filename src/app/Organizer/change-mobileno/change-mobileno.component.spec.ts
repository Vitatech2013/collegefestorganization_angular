import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMobilenoComponent } from './change-mobileno.component';

describe('ChangeMobilenoComponent', () => {
  let component: ChangeMobilenoComponent;
  let fixture: ComponentFixture<ChangeMobilenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMobilenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
