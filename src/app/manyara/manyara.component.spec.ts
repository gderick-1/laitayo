import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyaraComponent } from './manyara.component';

describe('ManyaraComponent', () => {
  let component: ManyaraComponent;
  let fixture: ComponentFixture<ManyaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
