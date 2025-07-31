import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { NgStyle } from '@angular/common';
import { CardDashComponent } from '../../../components/card-dash/card-dash.component';

@Component({
  selector: 'app-layout-dash',
  standalone: true,
  imports: [BarraPrincipalComponent,NgStyle, CardDashComponent],
  templateUrl: './layout-dash.component.html',
  styleUrl: './layout-dash.component.css'
})
export class LayoutDashComponent {

}
