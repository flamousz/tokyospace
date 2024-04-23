import { Component } from '@angular/core';
import { CardDragDropComponent } from '../../components/cards/card-drag-drop/card-drag-drop.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { CardDragDrop } from '../../interfaces/drag-drop.interface';


@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CardDragDropComponent, CardDragDropComponent, DragDropModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  dragDroplist: CardDragDrop[] = [
    {
      header: 'Thrives',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
    {
      header: 'Tulip',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
    {
      header: 'Violet',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
    {
      header: 'Orchards',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
    {
      header: 'Sakura',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
  ]

  dragDropTwolist: CardDragDrop[] = [
    {
      header: 'Lily',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
    {
      header: 'Daisy',
      description: 'Grateful in health, each day a gift, vitality thrives, joy abounds, blessings embraced.'
    },
  ]


  drop(event: CdkDragDrop<CardDragDrop[]>) {
    // moveItemInArray(this.dragDroplist, event.previousIndex, event.currentIndex)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }

    // pake yg ini untuk id dan data
    console.log(event.container.id);
    console.log(event.container.data);
    
    
  }


}
