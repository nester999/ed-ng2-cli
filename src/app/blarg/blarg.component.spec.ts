/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlargComponent } from './blarg.component';

describe('BlargComponent', () => {
  let component: BlargComponent;
  let fixture: ComponentFixture<BlargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
