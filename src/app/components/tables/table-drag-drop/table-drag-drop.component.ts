import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { TableModule } from 'primeng/table'
import { DummyDragDrop } from '../../../interfaces/drag-drop.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-table-drag-drop',
  standalone: true,
  imports: [TableModule, NgOptimizedImage],
  templateUrl: './table-drag-drop.component.html',
  styleUrl: './table-drag-drop.component.scss'
})
export class TableDragDropComponent implements OnInit {
  @Output()
  flagInit = new EventEmitter<boolean>();

  dragDropLists = input.required<DummyDragDrop[]>();


  ngOnInit(): void {
    console.log('table ada');
    this.flagInit.emit(true)
  }
}
