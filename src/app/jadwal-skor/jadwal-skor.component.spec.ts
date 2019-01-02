import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalSkorComponent } from './jadwal-skor.component';

describe('JadwalSkorComponent', () => {
  let component: JadwalSkorComponent;
  let fixture: ComponentFixture<JadwalSkorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalSkorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalSkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
