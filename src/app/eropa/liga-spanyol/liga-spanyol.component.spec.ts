import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaSpanyolComponent } from './liga-spanyol.component';

describe('LigaSpanyolComponent', () => {
  let component: LigaSpanyolComponent;
  let fixture: ComponentFixture<LigaSpanyolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaSpanyolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaSpanyolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
