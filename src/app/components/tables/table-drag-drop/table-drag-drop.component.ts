import { Component, OnInit, input } from '@angular/core';
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
  dragDropLists = input.required<DummyDragDrop[]>();


  ngOnInit(): void {
    console.log('table ada');
    
  }
}
