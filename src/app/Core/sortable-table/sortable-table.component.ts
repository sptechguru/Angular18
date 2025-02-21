import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sortable-table',
  imports: [NgIf,NgFor],
  templateUrl: './sortable-table.component.html',
  styleUrl: './sortable-table.component.css'
})
export class SortableTableComponent {
  @Input() dataResult: any[] = []; // Receives dynamic table data
  @Input() displayedColumns: string[] = []; // Receives column headers dynamically
  @Output() sortChanged = new EventEmitter<{ column: string; direction: 'asc' | 'desc' }>(); // Emits sorting info

  sortColumn:any = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get sortedData() {
    return [...this.dataResult].sort((a, b) => {
      if (!this.sortColumn) return 0;
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
      return this.sortDirection === 'asc'
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }
  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortChanged.emit({ column: this.sortColumn, direction: this.sortDirection });
  }
}
