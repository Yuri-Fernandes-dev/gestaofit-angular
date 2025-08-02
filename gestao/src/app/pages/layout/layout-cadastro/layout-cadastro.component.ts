import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/header-login/header-login.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-cadastro',
  standalone: true,
  imports: [HeaderLoginComponent, RouterLink],
  templateUrl: './layout-cadastro.component.html',
  styleUrl: './layout-cadastro.component.css'
})
export class LayoutCadastroComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

}
