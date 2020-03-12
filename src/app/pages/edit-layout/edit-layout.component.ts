import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss']
})
export class EditLayoutComponent implements OnInit {

  widgetsObject;
  widgetsx = [];
  listOfWidgets = [];
  // layouts = [[[1], [3]], [[2], [0]], [[0]]];
  layouts;
  layoutObject;
  layoutsx;
  layoutID;

  addColumn(index: number) {
    if (this.layouts[index].length < 4) {
      this.layouts[index].push([0]);
    }
  }

  addRow() {
    this.layouts.push([[0]]);
    console.log(JSON.stringify(this.layouts));
  }

  drop(event: CdkDragDrop<any>, asd: number) {
    // console.log(event.container);
    console.log('asd' + asd);
    // if (event.previousContainer === event.container) {
    //   // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    console.log(event.container.data[asd][0]);
    if (event.container.data[asd][0] === 0) {
      console.log('success');
      // event.container.data[asd] = [event.previousContainer.data[event.previousIndex]];

      if (typeof event.previousContainer.data[event.previousIndex] === 'number') {
        console.log(event.container.data[asd]);
        console.log([event.previousContainer.data[event.previousIndex]]);
        event.container.data[asd] = [event.previousContainer.data[event.previousIndex]];
      } else {
        console.log(event.previousContainer.data[3]);
        event.container.data[asd] = event.previousContainer.data[3];
      }
    } else {
      event.container.data[asd] = [event.previousContainer.data[event.previousIndex]];

    }
  }
  // }



  getWidgets() {
    this.data.getWidgets().subscribe(value => {
      this.widgetsObject = value;
      for (let i = 0; i < value.length; i++) {
        this.widgetsx.push(value[i].widget_name);
      }
      console.log(this.widgetsx);
    });
  }

  getLayouts() {
    this.data.getLayouts().subscribe(value => {
      this.layoutsx = value;
      console.log('1');
      for (let i = 0; i < value.length; i++) {
        console.log('2');
        if (value[i].id === this.layoutID) {
          console.log('3');
          this.layouts = JSON.parse(value[i].layout_config);
        }
      }
      console.log(this.layouts);
    });
  }


  getWidgetName(id: number) {
    for (let i = 0; i < this.widgetsObject.length; i++) {
      if (this.widgetsObject[i]["id"] === id) {
        console.log(this.widgetsObject[i]["widget_name"]);
      }
    }
    return this.widgetsObject[this.widgetsObject.findIndex].widget_name;
  }

  constructor(private data: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.data.getWidgets().subscribe(data => {
    //   console.log(data);
    //   this.widgetsObject = data;
    //   for (let i = 0; i < this.widgetsObject.length; i++) {
    //     this.listOfWidgets.push(this.widgetsObject[i].id);
    //   }
    // });
    this.route.params.subscribe(params => {
      this.layoutID = parseInt(params.id);
      this.getLayouts();

    });
    this.getWidgets();



  }

}
