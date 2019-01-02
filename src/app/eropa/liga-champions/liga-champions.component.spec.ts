import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaChampionsComponent } from './liga-champions.component';

describe('LigaChampionsComponent', () => {
  let component: LigaChampionsComponent;
  let fixture: ComponentFixture<LigaChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
