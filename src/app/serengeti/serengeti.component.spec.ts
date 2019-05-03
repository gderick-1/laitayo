import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerengetiComponent } from './serengeti.component';

describe('SerengetiComponent', () => {
  let component: SerengetiComponent;
  let fixture: ComponentFixture<SerengetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerengetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerengetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
