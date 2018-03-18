import { TestBed, inject } from '@angular/core/testing';

import { RentnowService } from './rentnow.service';

describe('RentnowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentnowService]
    });
  });

  it('should be created', inject([RentnowService], (service: RentnowService) => {
    expect(service).toBeTruthy();
  }));
});
