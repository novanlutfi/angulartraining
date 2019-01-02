import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangSayaComponent } from './tentang-saya.component';

describe('TentangSayaComponent', () => {
  let component: TentangSayaComponent;
  let fixture: ComponentFixture<TentangSayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentangSayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangSayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
