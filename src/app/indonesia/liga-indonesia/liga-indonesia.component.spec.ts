import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaIndonesiaComponent } from './liga-indonesia.component';

describe('LigaIndonesiaComponent', () => {
  let component: LigaIndonesiaComponent;
  let fixture: ComponentFixture<LigaIndonesiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaIndonesiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaIndonesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
