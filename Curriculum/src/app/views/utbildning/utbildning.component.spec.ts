import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtbildningComponent } from './utbildning.component';

describe('UtbildningComponent', () => {
  let component: UtbildningComponent;
  let fixture: ComponentFixture<UtbildningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtbildningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtbildningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
