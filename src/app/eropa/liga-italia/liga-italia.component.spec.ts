import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaItaliaComponent } from './liga-italia.component';

describe('LigaItaliaComponent', () => {
  let component: LigaItaliaComponent;
  let fixture: ComponentFixture<LigaItaliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaItaliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
