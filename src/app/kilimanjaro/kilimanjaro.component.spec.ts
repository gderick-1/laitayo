import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilimanjaroComponent } from './kilimanjaro.component';

describe('KilimanjaroComponent', () => {
  let component: KilimanjaroComponent;
  let fixture: ComponentFixture<KilimanjaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilimanjaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilimanjaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
