import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCadastroComponent } from './layout-cadastro.component';

describe('LayoutCadastroComponent', () => {
  let component: LayoutCadastroComponent;
  let fixture: ComponentFixture<LayoutCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
