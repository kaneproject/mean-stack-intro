/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumerosPrimosLeyendaComponent } from './numeros-primos-leyenda.component';

describe('NumerosPrimosLeyendaComponent', () => {
  let component: NumerosPrimosLeyendaComponent;
  let fixture: ComponentFixture<NumerosPrimosLeyendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosPrimosLeyendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosPrimosLeyendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
