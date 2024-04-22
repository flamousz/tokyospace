import { Component, input } from '@angular/core';
import { CardDragDrop } from '../../../interfaces/drag-drop.interface';

@Component({
  selector: 'app-card-drag-drop',
  standalone: true,
  imports: [],
  templateUrl: './card-drag-drop.component.html',
  styleUrl: './card-drag-drop.component.scss'
})
export class CardDragDropComponent {
  // @Input()
  // dataCard!: CardDragDrop;
  
  dataCard = input<CardDragDrop>();
}
