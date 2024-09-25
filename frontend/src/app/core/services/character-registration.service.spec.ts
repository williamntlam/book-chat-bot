import { TestBed } from '@angular/core/testing';

import { CharacterRegistrationService } from './character-registration.service';

describe('CharacterRegistrationService', () => {
  let service: CharacterRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
