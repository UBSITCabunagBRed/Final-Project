import { TestBed } from '@angular/core/testing';

import { Johto } from './johto';

describe('Johto', () => {
  let service: Johto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Johto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
