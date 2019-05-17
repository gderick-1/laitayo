import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingComponent } from './climbing.component';

describe('ClimbingComponent', () => {
  let component: ClimbingComponent;
  let fixture: ComponentFixture<ClimbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
