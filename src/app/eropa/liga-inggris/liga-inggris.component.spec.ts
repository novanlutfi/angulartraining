import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaInggrisComponent } from './liga-inggris.component';

describe('LigaInggrisComponent', () => {
  let component: LigaInggrisComponent;
  let fixture: ComponentFixture<LigaInggrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaInggrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaInggrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
