import { Component, OnInit } from '@angular/core';
import { SectionTable } from '../model/section';
import { SectionService } from '../api/services';
import { Observable } from 'rxjs';
import { SectionDTO } from '../api/models';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  sections: Array<SectionDTO>;
  headers: Array<string>;

  constructor(private sectionService : SectionService) {
    this.headers = new Array<string>();
    this.sections = new Array<SectionDTO>();
   }

  ngOnInit() {
    this.headers.push("id");
    this.headers.push("name");
    this.getAllSection().subscribe(
      data => {
        this.sections = data;
        console.log(data);

      }
    );
  }

  deleteSection(event) {
      this.sections = this.sections.filter(c => c.id != event.id);
      this.sections=[...this.sections];
  }

  getAllSection(): Observable<SectionDTO[]> {
      return this.sectionService.getSection();
  }
}

