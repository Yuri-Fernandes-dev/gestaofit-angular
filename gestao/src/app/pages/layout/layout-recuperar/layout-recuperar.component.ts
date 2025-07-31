import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/header-login/header-login.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-recuperar',
  standalone: true,
  imports: [HeaderLoginComponent, RouterLink],
  templateUrl: './layout-recuperar.component.html',
  styleUrl: './layout-recuperar.component.css'
})
export class LayoutRecuperarComponent {

}
