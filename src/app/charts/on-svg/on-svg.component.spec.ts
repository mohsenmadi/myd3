import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSvgComponent } from './on-svg.component';

describe('OnSvgComponent', () => {
  let component: OnSvgComponent;
  let fixture: ComponentFixture<OnSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
