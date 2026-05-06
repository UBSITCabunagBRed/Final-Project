import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennDisplay } from './hoenn-display';

describe('HoennDisplay', () => {
  let component: HoennDisplay;
  let fixture: ComponentFixture<HoennDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(HoennDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
