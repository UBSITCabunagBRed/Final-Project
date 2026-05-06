import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoDisplay } from './kanto-display';

describe('KantoDisplay', () => {
  let component: KantoDisplay;
  let fixture: ComponentFixture<KantoDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
