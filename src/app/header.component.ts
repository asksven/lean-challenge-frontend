import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onStore() {
    this.dataService.storeData();
  }

  onRetrieve() {
    this.dataService.fetchData();
  }
}
