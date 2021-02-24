import { TestBed } from '@angular/core/testing';

import { NavScrollService } from './nav-scroll.service';

describe('NavScrollService', () => {
  let service: NavScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
