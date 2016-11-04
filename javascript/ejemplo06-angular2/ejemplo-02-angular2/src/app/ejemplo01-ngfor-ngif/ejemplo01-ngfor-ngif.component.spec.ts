/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo01NgforNgifComponent } from './ejemplo01-ngfor-ngif.component';

describe('Ejemplo01NgforNgifComponent', () => {
  let component: Ejemplo01NgforNgifComponent;
  let fixture: ComponentFixture<Ejemplo01NgforNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo01NgforNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo01NgforNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
