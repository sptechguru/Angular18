import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {

  constructor() { }

  @Input() headTitleArr: { key: string; header: string }[] = [];
  @Input() gridResdata: any = [];
  @Input() searchBox: boolean = true; // if You Need a Search Box is true & other wise false
  @Input() themeClass: string = 'table-bordered table-dark'; //by Default themes
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  filterdData: any = [];
  seachTerm: any = '';

  @Input() pageSize: number = 10;
  paginatedData: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  currentSortKey: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnChanges(changes: SimpleChanges): void {
    this.filterdData = [...this.gridResdata];
    // console.log('changes filterdData........', this.filterdData)
  }


  applyFilter(searchVal: string) {
    if (!searchVal.trim()) {
      this.filterdData = [...this.gridResdata]; // Reset to original data
      return;
    }
    this.filterdData = this.gridResdata.filter((item: any) => {
      const values = Object.values(item);
      return values.some((val: any) => {
        if (val != null) {
          return val.toString().toLowerCase().includes(searchVal.toLowerCase());
        }
        return false;
      });
    });
  }


  editRecord(item: any) {
    // console.log('Edit.......', item);
    this.onEdit.emit(item);
  }

  deleteRecord(item: any) {
    // console.log('Delete.......', item);
    this.onDelete.emit(item);
  }


  calculatePagination() {
    this.totalPages = Math.ceil(this.filterdData.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    console.log('totalSize', this.totalPages, 'Current Page', this.currentPage)
    this.paginatedData = this.filterdData.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize
    );
  }

  goToPage(page: number) {
    this.currentPage = page;
    console.log('current page', this.currentPage);
    this.calculatePagination();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      console.log('previous page', this.currentPage);
      this.calculatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log('Next page', this.currentPage);
      this.calculatePagination();
    }
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
