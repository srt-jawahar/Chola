import { TestBed } from '@angular/core/testing';

import { Main.InterceptorInterceptor } from './main.interceptor.interceptor';

describe('Main.InterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Main.InterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Main.InterceptorInterceptor = TestBed.inject(Main.InterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
