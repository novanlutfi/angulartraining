import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaktikComponent } from './taktik.component';

describe('TaktikComponent', () => {
  let component: TaktikComponent;
  let fixture: ComponentFixture<TaktikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaktikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaktikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
