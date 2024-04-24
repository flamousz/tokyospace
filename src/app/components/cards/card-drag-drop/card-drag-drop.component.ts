import { Component, Input, TemplateRef } from '@angular/core';
import { CardDragDrop } from '../../../interfaces/drag-drop.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-drag-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-drag-drop.component.html',
  styleUrl: './card-drag-drop.component.scss'
})
export class CardDragDropComponent {
  // @Input()
  // dataCard!: CardDragDrop;
  @Input()
  CustomTemplate!: TemplateRef<any>;
  @Input()
  dataCard!:CardDragDrop
  // dataCard = input<CardDragDrop>();
  // CustomTemplate = input.required<TemplateRef<any>>()




  constructor() {}




}
