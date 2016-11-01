/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DerpComponent } from './derp.component';

describe('DerpComponent', () => {
  let component: DerpComponent;
  let fixture: ComponentFixture<DerpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
