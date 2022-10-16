/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevinetteComponent } from './devinette.component';

describe('DevinetteComponent', () => {
  let component: DevinetteComponent;
  let fixture: ComponentFixture<DevinetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevinetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
