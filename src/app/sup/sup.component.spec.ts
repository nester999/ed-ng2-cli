/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SupComponent } from './sup.component';

describe('SupComponent', () => {
  let component: SupComponent;
  let fixture: ComponentFixture<SupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
