import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  brandName = "OpenBook Library";
  
  totalBookCount = 35;
  toggleCount = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleCount = !this.toggleCount;
  }

}
