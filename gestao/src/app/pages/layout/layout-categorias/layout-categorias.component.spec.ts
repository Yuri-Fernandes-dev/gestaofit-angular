import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCategoriasComponent } from './layout-categorias.component';

describe('LayoutCategoriasComponent', () => {
  let component: LayoutCategoriasComponent;
  let fixture: ComponentFixture<LayoutCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
