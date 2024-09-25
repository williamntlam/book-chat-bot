import { TestBed } from '@angular/core/testing';

import { CharacterInformationService } from './character-information.service';

describe('CharacterInformationService', () => {
  let service: CharacterInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
