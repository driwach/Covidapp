import { TestBed } from '@angular/core/testing';

import { CovidcasosService } from './covidcasos.service';

describe('CovidcasosService', () => {
  let service: CovidcasosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcasosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
