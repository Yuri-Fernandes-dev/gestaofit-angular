import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVendasComponent } from './layout-vendas.component';

describe('LayoutVendasComponent', () => {
  let component: LayoutVendasComponent;
  let fixture: ComponentFixture<LayoutVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutVendasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
