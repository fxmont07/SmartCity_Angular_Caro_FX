import { Component, OnInit, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DisplayDataComponent implements OnInit {
  @Input() colNames: Array<string>;
  @Input() data: Array<any>;
  colToDisplay: Array<string>;
  tableModel: MatTableDataSource<any>;
  @Output() addEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() pageEvent = new EventEmitter();
  selection = new SelectionModel<any>(false, []);
  selectedElement: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort
  constructor() {
    this.colToDisplay = new Array<string>(); 
    this.tableModel = new MatTableDataSource(this.data);
  }

  ngOnInit() {
    this.colToDisplay = this.colNames.slice();
    this.tableModel.sort = this.sort;
    this.tableModel.paginator = this.paginator;
  }

  selectElement(row) {
    this.selectedElement = row;
  }

  addElement() {
    this.addEvent.emit();
  }

  editElement() {
    this.editEvent.emit(this.selectedElement);
  }

  deleteElement() {
    this.deleteEvent.emit(this.selectedElement);
  }

  infoPage() {
    this.pageEvent.emit([this.paginator.pageSize, this.paginator.pageIndex]);
  }

  applyFilter(value: string) {
    const research = value.trim().toLowerCase();
  }
}