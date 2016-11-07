/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NumerosPrimosService } from './numeros-primos.service';

describe('Service: NumerosPrimos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumerosPrimosService]
    });
  });

  it('should ...', inject([NumerosPrimosService], (service: NumerosPrimosService) => {
    expect(service).toBeTruthy();
  }));
});
