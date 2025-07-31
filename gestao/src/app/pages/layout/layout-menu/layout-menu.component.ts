import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";

@Component({
  selector: 'app-layout-menu',
  standalone: true,
  imports: [BarraPrincipalComponent],
  templateUrl: './layout-menu.component.html',
  styleUrl: './layout-menu.component.css'
})
export class LayoutMenuComponent {

}
