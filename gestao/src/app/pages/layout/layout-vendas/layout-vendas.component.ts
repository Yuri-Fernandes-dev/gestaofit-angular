import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";

@Component({
  selector: 'app-layout-vendas',
  standalone: true,
  imports: [BarraPrincipalComponent],
  templateUrl: './layout-vendas.component.html',
  styleUrl: './layout-vendas.component.css'
})
export class LayoutVendasComponent {

}
