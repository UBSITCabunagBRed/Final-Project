import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoDisplay } from './johto-display';

describe('JohtoDisplay', () => {
  let component: JohtoDisplay;
  let fixture: ComponentFixture<JohtoDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
