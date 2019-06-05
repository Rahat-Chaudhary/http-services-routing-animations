import { TestBed } from '@angular/core/testing';

import { GitAssignmetService } from './git-assignmet.service';

describe('GitAssignmetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitAssignmetService = TestBed.get(GitAssignmetService);
    expect(service).toBeTruthy();
  });
});
