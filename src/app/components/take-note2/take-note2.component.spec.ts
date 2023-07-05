import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeNote2Component } from './take-note2.component';

describe('TakeNote2Component', () => {
  let component: TakeNote2Component;
  let fixture: ComponentFixture<TakeNote2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeNote2Component]
    });
    fixture = TestBed.createComponent(TakeNote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
