import { TestBed } from '@angular/core/testing';

import { ProListService } from './pro-list.service';

describe('ProListService', () => {
  let service: ProListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
