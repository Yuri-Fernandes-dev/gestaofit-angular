import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProdutosComponent } from './layout-produtos.component';

describe('LayoutProdutosComponent', () => {
  let component: LayoutProdutosComponent;
  let fixture: ComponentFixture<LayoutProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
