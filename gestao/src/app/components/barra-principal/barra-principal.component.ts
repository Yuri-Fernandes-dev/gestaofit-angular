import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-principal',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './barra-principal.component.html',
  styleUrl: './barra-principal.component.css'
})
export class BarraPrincipalComponent {

}
