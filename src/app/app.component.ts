import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './AppConfig/localstorage.token';

@Component({
  selector: 'bms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BMS-UI';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {
    
  }

  ngOnInit() {
    this.localStorage.setItem('name',  'ANE Books');
  }

}
