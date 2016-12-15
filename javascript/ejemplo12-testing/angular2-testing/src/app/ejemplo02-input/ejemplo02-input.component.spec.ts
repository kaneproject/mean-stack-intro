/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo02InputComponent } from './ejemplo02-input.component';

describe('Ejemplo02InputComponent', () => {
  let component: Ejemplo02InputComponent;
  let fixture: ComponentFixture<Ejemplo02InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo02InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo02InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobar que el contenido de la plantilla corresponde con la entrada',async(()=>{
    const element = fixture.nativeElement;
    component.clientes = ["Luis Ramon","Pedro", "Alberto"];
    fixture.detectChanges();
    expect(element.querySelectorAll("span").length).toBe(3);

  })
});
