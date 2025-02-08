import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciever1Component } from './reciever1.component';

describe('Reciever1Component', () => {
  let component: Reciever1Component;
  let fixture: ComponentFixture<Reciever1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciever1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciever1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
