import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragDropComponent } from './table-drag-drop.component';

describe('TableDragDropComponent', () => {
  let component: TableDragDropComponent;
  let fixture: ComponentFixture<TableDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDragDropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
