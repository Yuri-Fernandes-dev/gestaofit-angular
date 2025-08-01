import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutLoginComponent } from "./pages/layout/layout-login/layout-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestao';
}
