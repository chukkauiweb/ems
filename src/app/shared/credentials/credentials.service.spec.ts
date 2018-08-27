import { TestBed, inject } from '@angular/core/testing';

import { CredentionsService } from './credentions.service';

describe('CredentionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentionsService]
    });
  });

  it('should be created', inject([CredentionsService], (service: CredentionsService) => {
    expect(service).toBeTruthy();
  }));
});
