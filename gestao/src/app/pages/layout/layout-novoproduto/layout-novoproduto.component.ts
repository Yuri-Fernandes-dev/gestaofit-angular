import { Component } from '@angular/core';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { NgIf } from '@angular/common';
import { BtnBasicoComponent } from "../../../components/btn-basico/btn-basico.component";


@Component({
  selector: 'app-layout-novoproduto',
  standalone: true,
  imports: [BarraPrincipalComponent, NgIf, BtnBasicoComponent],
  templateUrl: './layout-novoproduto.component.html',
  styleUrl: './layout-novoproduto.component.css'
})
export class LayoutNovoprodutoComponent {

}
