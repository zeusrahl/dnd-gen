import { TestBed } from '@angular/core/testing';

import { CharClassChoiceService } from './char-class-choice.service';

describe('CharClassChoiceService', () => {
  let service: CharClassChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharClassChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
