import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card-dash',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card-dash.component.html',
  styleUrl: './card-dash.component.css'
})
export class CardDashComponent {
  @Input() titulo_card: string = "";
  @Input() valor_card: string = "";
  @Input() bg_card: string = ""; // Cor dinâmica
}
