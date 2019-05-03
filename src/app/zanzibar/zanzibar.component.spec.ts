import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanzibarComponent } from './zanzibar.component';

describe('ZanzibarComponent', () => {
  let component: ZanzibarComponent;
  let fixture: ComponentFixture<ZanzibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanzibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanzibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
