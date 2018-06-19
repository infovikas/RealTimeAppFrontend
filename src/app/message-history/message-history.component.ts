import { DetailsPageComponent } from './../details-page/details-page.component';
import { ContactDataService } from './../services/contact-data.service';
import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css'],
})
export class MessageHistoryComponent implements OnInit {
  messages;
  contentData = {};

  constructor(
    private httpService: ServiceService,
    private ctnData: ContactDataService,
    public dialog: MatDialog) {
    this.httpService.getOldMsg().subscribe(result => {
      console.log(result);
      this.messages = result;

    });
    console.log(this.messages);
  }

  ngOnInit() {
    this.ctnData.currentData.subscribe(data => this.contentData = data);
  }

  details() {
    const modelRef = this.dialog.open(DetailsPageComponent, {
      height: '460px',
      width: '600px'
    });
  }

  data(data: any) {
    this.contentData = data;
    console.log(this.contentData);
    this.ctnData.getData(this.contentData);
  }


}




