import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBasicoComponent } from './btn-basico.component';

describe('BtnBasicoComponent', () => {
  let component: BtnBasicoComponent;
  let fixture: ComponentFixture<BtnBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnBasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
