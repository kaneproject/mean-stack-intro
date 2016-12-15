/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo01baseComponent } from './ejemplo01base.component';

describe('Ejemplo01baseComponent', () => {
  let component: Ejemplo01baseComponent;
  let fixture: ComponentFixture<Ejemplo01baseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo01baseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo01baseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Existe la propiedad nombre y tiene de valor Ruben',()=>{
   expect(component.name).toBe("Ruben");
  });
  it('Existe una propiedad con al menos 10 elementos',()=>{
    expect(component.elementos.length)
      .toBeGreaterThanOrEqual(10);
  })
  it('El metodo metodoDeComponent devuelve lo esperado',()=>{
    expect(component.metodoDeComponent()).toBe('Hola caracola');
  });
});
