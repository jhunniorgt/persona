import { TestBed } from '@angular/core/testing';

import { PersonasService } from './personas.service';

describe('PeesonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasService = TestBed.get(PersonasService);
    expect(service).toBeTruthy();
  });
});
