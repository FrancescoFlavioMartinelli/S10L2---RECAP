import { TestBed } from '@angular/core/testing';

import { HttpsInterInterceptor } from './https-inter.interceptor';

describe('HttpsInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpsInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpsInterInterceptor = TestBed.inject(HttpsInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
