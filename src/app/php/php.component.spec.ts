/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhpComponent } from './php.component';

describe('PhpComponent', () => {
  let component: PhpComponent;
  let fixture: ComponentFixture<PhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
