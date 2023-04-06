import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdChngPwdComponent } from './std-chng-pwd.component';

describe('StdChngPwdComponent', () => {
  let component: StdChngPwdComponent;
  let fixture: ComponentFixture<StdChngPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdChngPwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdChngPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
