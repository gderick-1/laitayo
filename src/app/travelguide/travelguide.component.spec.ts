import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelguideComponent } from './travelguide.component';

describe('TravelguideComponent', () => {
  let component: TravelguideComponent;
  let fixture: ComponentFixture<TravelguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
