import { TestBed } from '@angular/core/testing';

import { AssignReleaseBookService } from './assign-release-book.service';

describe('AssignReleaseBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignReleaseBookService = TestBed.get(AssignReleaseBookService);
    expect(service).toBeTruthy();
  });
});
