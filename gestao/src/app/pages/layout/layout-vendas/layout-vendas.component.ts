import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { BtnBasicoComponent } from "../../../components/btn-basico/btn-basico.component";

@Component({
  selector: 'app-layout-vendas',
  standalone: true,
  imports: [BarraPrincipalComponent, BtnBasicoComponent],
  templateUrl: './layout-vendas.component.html',
  styleUrl: './layout-vendas.component.css'
})
export class LayoutVendasComponent {

}
