import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRecuperarComponent } from './layout-recuperar.component';

describe('LayoutRecuperarComponent', () => {
  let component: LayoutRecuperarComponent;
  let fixture: ComponentFixture<LayoutRecuperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutRecuperarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutRecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
