import { Component, OnInit, Input, Output } from '@angular/core';
import { Company, PeriodicElement } from '../model/company';
import { EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  //@Input() data : Array<any>;
  //@Input() headers : Array<string>;
  
  //displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();

  @Input() colNames : Array<string>;
  @Input() colToDisplay : Array<string>;
  //data: PeriodicElement[] = ELEMENT_DATA;ù
  @Input() data : Array<Company>;
  constructor() {
      //this.data = new Array<any>();
      //this.headers = new Array<string>();

      this.colNames = new Array<string>();
      this.colToDisplay = new Array<string>(); // Use wich a associatif table
      this.data = new Array<Company>();
  }

  ngOnInit() {
      //this.headers.push("Coucou");
      //this.headers.push("Coucou2");

      //this.data.push("rep");
      //this.data.push("rep")
      /*
      this.data.push({coucou: "coucou", coucou2 :"coucou2"});
      this.data.push({coucou: "coucou", coucou2 : "coucou2"});
      */
      /*
      this.colNames.push("id");
      this.colNames.push("name");
      this.colNames.push("email");
      this.colNames.push("address");
      */
      this.colToDisplay = this.colNames.slice();

      /*this.data.push({
        id : 1,
        name : "Test1",
        email : "rere",
        address : "adr"
      });
      this.data.push({
        id : 2,
        name : "Test1",
        email : "rere",
        address : "adr"
      });
      this.data.push({
        id : 3,
        name : "Test1",
        email : "rere",
        address : "adr"
      });
      this.data.push({
        id : 4,
        name : "Test1",
        email : "rere",
        address : "adr"
      });
      */
  }
  addElement() {}
  removeElement() {}
  editElement () {}
}
/*
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/