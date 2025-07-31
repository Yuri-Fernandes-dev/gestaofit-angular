import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/header-login/header-login.component";
import { LoginComponent } from "../../../components/login/login.component";

@Component({
  selector: 'app-layout-login',
  standalone: true,
  imports: [HeaderLoginComponent, LoginComponent],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.css'
})
export class LayoutLoginComponent {

}
