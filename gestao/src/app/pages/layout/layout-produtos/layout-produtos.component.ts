import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { BtnBasicoComponent } from "../../../components/btn-basico/btn-basico.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-produtos',
  standalone: true,
  imports: [BarraPrincipalComponent, BtnBasicoComponent, RouterLink],
  templateUrl: './layout-produtos.component.html',
  styleUrl: './layout-produtos.component.css'
})
export class LayoutProdutosComponent {
  

}
