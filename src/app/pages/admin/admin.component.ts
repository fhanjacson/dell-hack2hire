import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  layouts = [['asd'], ['asd']];

  addColumn(index: number) {
    if (this.layouts[index].length < 5) {
      this.layouts[index].push('asd');
    }
  }

  addRow() {
    this.layouts.push(['asd']);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
