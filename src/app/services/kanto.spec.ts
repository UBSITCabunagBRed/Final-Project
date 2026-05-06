import { TestBed } from '@angular/core/testing';

import { Kanto } from './kanto';

describe('Kanto', () => {
  let service: Kanto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kanto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
