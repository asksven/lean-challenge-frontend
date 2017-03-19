import { Component } from '@angular/core';

import { DataService } from './data.service';



@Component({
  selector: 'lc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor(private dataService: DataService) {
  };

}
