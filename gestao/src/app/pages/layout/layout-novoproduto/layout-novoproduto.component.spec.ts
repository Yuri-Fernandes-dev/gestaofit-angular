import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNovoprodutoComponent } from './layout-novoproduto.component';

describe('LayoutNovoprodutoComponent', () => {
  let component: LayoutNovoprodutoComponent;
  let fixture: ComponentFixture<LayoutNovoprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutNovoprodutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutNovoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
