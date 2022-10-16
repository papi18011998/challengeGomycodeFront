/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorrigerComponent } from './corriger.component';

describe('CorrigerComponent', () => {
  let component: CorrigerComponent;
  let fixture: ComponentFixture<CorrigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
