import { TestBed, inject } from '@angular/core/testing';

import { SportsProviderService } from './sports-provider.service';

describe('SportsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsProviderService]
    });
  });

  it('should be created', inject([SportsProviderService], (service: SportsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
