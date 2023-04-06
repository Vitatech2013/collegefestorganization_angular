import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFestComponent } from './edit-fest.component';

describe('EditFestComponent', () => {
  let component: EditFestComponent;
  let fixture: ComponentFixture<EditFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
