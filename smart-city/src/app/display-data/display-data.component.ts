import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Company } from '../model/company';
import { EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DisplayDataComponent implements OnInit {
  @Input() colNames : Array<string>;
  @Input() colToDisplay : Array<string>;
  @Input() data : Array<Company>;

  @Output() addEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();

  selectedElement : any;

  constructor() {
      this.colNames = new Array<string>();
      this.colToDisplay = new Array<string>(); // Use wich a associatif table
      this.data = new Array<Company>();
  }

  ngOnInit() {
      this.colToDisplay = this.colNames.slice();
  }

  selectElement(row){
    this.selectedElement = row;
  }

  addElement() {
    this.addEvent.emit();
  }

  editElement () {
    this.editEvent.emit(this.selectedElement);
  }
  

  deleteElement() {
    this.deleteEvent.emit(this.selectedElement);
  } 
}