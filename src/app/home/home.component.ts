import { ServiceService } from './../services/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: ServiceService,
    public router: Router
  ) { }

  ngOnInit() { }


  msgSend(data) {
    console.log(data);
    this.http.sendmsg(data).subscribe(result => console.log(result));

  }
  routernavigation() {
    window.location.reload();
  }
}
