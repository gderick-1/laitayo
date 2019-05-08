import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    console.log('main layout component constructor called');
   }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
    })
  }

}
