import { TestBed } from '@angular/core/testing';

import { ServiceStatistiqueService } from './service-statistique.service';

describe('ServiceStatistiqueService', () => {
  let service: ServiceStatistiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStatistiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
