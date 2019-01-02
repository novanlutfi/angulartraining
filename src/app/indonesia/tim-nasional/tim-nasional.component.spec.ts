import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimNasionalComponent } from './tim-nasional.component';

describe('TimNasionalComponent', () => {
  let component: TimNasionalComponent;
  let fixture: ComponentFixture<TimNasionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimNasionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimNasionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
