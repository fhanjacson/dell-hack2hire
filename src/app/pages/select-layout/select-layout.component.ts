import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-select-layout',
  templateUrl: './select-layout.component.html',
  styleUrls: ['./select-layout.component.scss']
})
export class SelectLayoutComponent implements OnInit {

  listOfLayouts;

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.getLayouts().subscribe(data => {
      this.listOfLayouts = data;
      this.service.listOfLayouts = data;
    });
  }

}
