import { ContactDataService } from './../services/contact-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  details;

  constructor(
    private ctnData: ContactDataService
  ) { }

  ngOnInit() {
    this.ctnData.currentData.subscribe(data => {
      this.details = data;
    });
  }

}
