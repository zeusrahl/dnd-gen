/**
 * @Author: dotsonkellyfam
 * @Date:   2022-03-28T19:55:49-04:00
 * @Last modified by:   dotsonkellyfam
 * @Last modified time: 2022-03-28T21:48:43-04:00
 */



import { TestBed } from '@angular/core/testing';

import { RacialFeaturesService } from './racial-features.service';

describe('RacialFeaturesService', () => {
  let service: RacialFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacialFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
