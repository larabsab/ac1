import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  author = 'Lara Sabino';
  currentDate = new Date().toLocaleDateString();
}
