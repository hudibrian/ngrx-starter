import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsServiceService } from './hacker-news-service.service';

describe('HackerNewsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsServiceService]
    });
  });

  it(
    'should be created',
    inject([HackerNewsServiceService], (service: HackerNewsServiceService) => {
      expect(service).toBeTruthy();
    })
  );
});
