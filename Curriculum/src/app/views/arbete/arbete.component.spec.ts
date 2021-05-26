import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeteComponent } from './arbete.component';

describe('ArbeteComponent', () => {
  let component: ArbeteComponent;
  let fixture: ComponentFixture<ArbeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
