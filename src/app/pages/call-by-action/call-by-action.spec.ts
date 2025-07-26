import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallByAction } from './call-by-action';

describe('CallByAction', () => {
  let component: CallByAction;
  let fixture: ComponentFixture<CallByAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallByAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallByAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
