/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectFilterService } from './select-filter.service';

describe('Service: SelectFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectFilterService],
    });
  });

  it('should ...', inject(
    [SelectFilterService],
    (service: SelectFilterService) => {
      expect(service).toBeTruthy();
    }
  ));
});
