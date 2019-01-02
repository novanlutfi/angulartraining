import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSampingComponent } from './menu-samping.component';

describe('MenuSampingComponent', () => {
  let component: MenuSampingComponent;
  let fixture: ComponentFixture<MenuSampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
