import { TestBed, inject } from '@angular/core/testing';

import { UserCardService } from './user-card.service';

describe('UserCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCardService]
    });
  });

  it('should be created', inject([UserCardService], (service: UserCardService) => {
    expect(service).toBeTruthy();
  }));
});
