import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgorongoroComponent } from './ngorongoro.component';

describe('NgorongoroComponent', () => {
  let component: NgorongoroComponent;
  let fixture: ComponentFixture<NgorongoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgorongoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgorongoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
