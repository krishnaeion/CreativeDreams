import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciever2Component } from './reciever2.component';

describe('Reciever2Component', () => {
  let component: Reciever2Component;
  let fixture: ComponentFixture<Reciever2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciever2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciever2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
