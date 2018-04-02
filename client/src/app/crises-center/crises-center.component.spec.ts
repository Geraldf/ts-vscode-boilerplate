import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisesCenterComponent } from './crises-center.component';

describe('CrisesCenterComponent', () => {
  let component: CrisesCenterComponent;
  let fixture: ComponentFixture<CrisesCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisesCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
