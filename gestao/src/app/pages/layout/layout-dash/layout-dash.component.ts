import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";

@Component({
  selector: 'app-layout-dash',
  standalone: true,
  imports: [BarraPrincipalComponent],
  templateUrl: './layout-dash.component.html',
  styleUrl: './layout-dash.component.css'
})
export class LayoutDashComponent {

}
