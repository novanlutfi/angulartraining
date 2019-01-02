import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaPerancisComponent } from './liga-perancis.component';

describe('LigaPerancisComponent', () => {
  let component: LigaPerancisComponent;
  let fixture: ComponentFixture<LigaPerancisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaPerancisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaPerancisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
