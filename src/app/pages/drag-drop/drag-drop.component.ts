import { Component } from '@angular/core';
import { CardDragDropComponent } from '../../components/cards/card-drag-drop/card-drag-drop.component';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CardDragDropComponent, CardDragDropComponent],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
}
