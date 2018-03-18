import { TestBed, inject } from '@angular/core/testing';

import { ElectronicsService } from './electronics.service';

describe('ElectronicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronicsService]
    });
  });

  it('should be created', inject([ElectronicsService], (service: ElectronicsService) => {
    expect(service).toBeTruthy();
  }));
});
