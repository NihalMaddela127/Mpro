import { TestBed, inject } from '@angular/core/testing';

import { MyrentalsService } from './myrentals.service';

describe('MyrentalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyrentalsService]
    });
  });

  it('should be created', inject([MyrentalsService], (service: MyrentalsService) => {
    expect(service).toBeTruthy();
  }));
});
