import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TombolSampingComponent } from './tombol-samping.component';

describe('TombolSampingComponent', () => {
  let component: TombolSampingComponent;
  let fixture: ComponentFixture<TombolSampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombolSampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TombolSampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
