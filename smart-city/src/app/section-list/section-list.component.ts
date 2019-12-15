import { Component, OnInit } from '@angular/core';
import { SectionTable } from '../model/section';
import { SectionService } from '../api/services';
import { Observable } from 'rxjs';
import { SectionDTO } from '../api/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  sections: Array<SectionDTO>;
  headers: Array<string>;

  constructor(
    private sectionService: SectionService,
    private router: Router) {
    this.headers = new Array<string>();
    this.sections = new Array<SectionDTO>();
  }

  ngOnInit() {
    this.headers = this.getHeaders();
    this.getAllSection().subscribe(
      data => {
        this.sections = data;
      }
    );
  }

  deleteSection(event: SectionDTO) {
    this.sectionService.deleteSection(event)
      .subscribe(() => {
        this.sections = this.sections.filter(c => c.id != event.id);
        this.sections = [...this.sections];
      });
  }

  getAllSection(): Observable<SectionDTO[]> {
    return this.sectionService.getSection();
  }

  editSection(section: SectionDTO): void {
    this.router.navigate(["/formsection/", section.id]);
  }

  addSection(): void {
    this.router.navigate(["/formsection"])
  }

  getHeaders(): Array<string> {
    return ["id", "name"];
  }
}

