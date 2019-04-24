import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarangireComponent } from './tarangire.component';

describe('TarangireComponent', () => {
  let component: TarangireComponent;
  let fixture: ComponentFixture<TarangireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarangireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarangireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
