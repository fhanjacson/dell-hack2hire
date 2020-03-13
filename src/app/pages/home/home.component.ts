import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
      this.getWidgetList();
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
      //this.getWidgetUrl(this.activeLayoutConfig[0][0][0]);
    });

    // this.widgetList = this.service.getWidgets();
  }

  getWidgetUrl(id: number) {
    for (let i = 0; i < this.widgetList.length; i++) {
      if (this.widgetList[i].id === id) {
        this.asd.push(this.widgetList[i].id, this.widgetList[i].url);
        console.log(this.asd);
        return this.widgetList[i].url;
      }
    }
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor(private service: AdminService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getWidgetListz();
    this.getActiveLayout();
    console.log("loaded")
    console.log(this.widgetList);
  }

}
