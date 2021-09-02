import { TestBed } from '@angular/core/testing';

import { ToDoRepositoryService } from './to-do-repository.service';

describe('ToDoRepositoryService', () => {
  let service: ToDoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
