import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";

@Component({
  selector: 'app-layout-despesas',
  standalone: true,
  imports: [BarraPrincipalComponent],
  templateUrl: './layout-despesas.component.html',
  styleUrl: './layout-despesas.component.css'
})
export class LayoutDespesasComponent {

}
