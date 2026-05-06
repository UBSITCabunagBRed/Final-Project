import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemartDisplay } from './pokemart-display';

describe('PokemartDisplay', () => {
  let component: PokemartDisplay;
  let fixture: ComponentFixture<PokemartDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemartDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemartDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
