import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDespesasComponent } from './layout-despesas.component';

describe('LayoutDespesasComponent', () => {
  let component: LayoutDespesasComponent;
  let fixture: ComponentFixture<LayoutDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDespesasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
