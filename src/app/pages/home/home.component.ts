import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeLayoutConfig;
  widgetList;
  asd = [];

  async getActiveLayout() {
    await this.service.getActiveLayout().subscribe(value => {
      this.activeLayoutConfig = JSON.parse(value[0].layout_config);
      console.log(this.activeLayoutConfig);
    });
  }

  getWidgetListz() {
    this.widgetList = this.service.getWidgets();
  }

  async getWidgetList() {
    await this.service.getWidgets().subscribe(value => {
      this.widgetList = value;
      // for (let i = 0; i < value.length; i++) {
      //   if (this.activeLayoutConfig)
      //     this.asd.push(value[i].id, value[i].url);
      // }
    });

    // this.widgetList = this.service.getWidgets();
  }

  // getWidgetUrl(id: number) {
  //   for (let i = 0; i < this.widgetList.length; i++) {
  //     if (this.widgetList[i][0] === id) {
  //       return this.widgetList[i][1];
  //     }
  //   }
  // }

  constructor(private service: AdminService) { }

  async ngOnInit() {
    await this.getWidgetList();
    await this.getActiveLayout();
    console.log("loaded")
    console.log(this.widgetList);
  }

}
