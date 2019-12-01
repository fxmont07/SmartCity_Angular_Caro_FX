import { Component, OnInit } from '@angular/core';
import { SectionTable } from '../model/section';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  sections: Array<SectionTable>;
  headers: Array<string>;

  constructor() {
    this.headers = new Array<string>();
    this.sections = new Array<SectionTable>();
   }

  ngOnInit() {
    this.headers.push("id");
    this.headers.push("name");

    this.sections.push( {
      id : 1, name : "Coucou"
    })

  }

  deleteSection(event) {
      this.sections = this.sections.filter(c => c.id != event.id);
      this.sections=[...this.sections];
  }
}

