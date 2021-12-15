import { TestBed } from '@angular/core/testing';

import { BbsContentService } from './bbs-content.service';

describe('BbsContentService', () => {
  let service: BbsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
