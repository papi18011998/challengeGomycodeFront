/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CourComponent } from './cour.component';

describe('CourComponent', () => {
  let component: CourComponent;
  let fixture: ComponentFixture<CourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
