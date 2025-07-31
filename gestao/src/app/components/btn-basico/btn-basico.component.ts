import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-basico',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './btn-basico.component.html',
  styleUrl: './btn-basico.component.css'
})
export class BtnBasicoComponent {
  @Input()
  nome_btn:string =""
   @Input() routerLink?: string;
   @Input() rota:string =""

}
