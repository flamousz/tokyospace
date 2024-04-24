import { Component, OnInit } from '@angular/core';
import { CardDragDropComponent } from '../../components/cards/card-drag-drop/card-drag-drop.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { CardDragDrop, DummyDragDrop } from '../../interfaces/drag-drop.interface';
import { cardDragF, cardDragS } from '../../dummies/dragDrop.dummy';
import { RestService } from '../../services/rest.service';
import { lastValueFrom } from 'rxjs';
import { TableDragDropComponent } from '../../components/tables/table-drag-drop/table-drag-drop.component';
import { slideInAnimation } from '../../animations/global.animation';


@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CardDragDropComponent, CardDragDropComponent, DragDropModule, TableDragDropComponent],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
  animations: [
    slideInAnimation
  ]
})
export class DragDropComponent implements OnInit {
  dragDroplist: CardDragDrop[] = cardDragF

  dragDropTwolist: CardDragDrop[] = cardDragS

  //#region DATA TABLE FETCHING
  dummyDragDropResponse?: DummyDragDrop[]
  isDrag: boolean = false
  isTableFetch: boolean = false
  //#endregion

  

  constructor(private api: RestService) {}

  async ngOnInit(): Promise<void> {
  }

  //#region FETCHING FUNC
  async getDragDropList() {
    try {
      this.isDrag = true
      this.dummyDragDropResponse = await lastValueFrom(this.api.getDragDrop())

    } catch (error) {
      console.log(error);
    } finally {
      this.isDrag = false
    }
  }
  //#endregion

  //#region DRAG DROP FUNC
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
  //#endregion

  //#region TABLE FUNC
  async dataTableFect() {
    if (this.isTableFetch) await this.getDragDropList();
  }

  async  emitTable(inp: boolean) {
    this.isTableFetch = inp

    await this.dataTableFect()
  }
  //#endregion


}
