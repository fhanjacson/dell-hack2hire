import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listOfWidgets = [1, 2, 3, 4, 5];
  layouts = [[[1], [3]], [[2], [0]], [[0]]];
  // tempArray = [];[]
  isEmpty = true;

  addColumn(index: number) {
    if (this.layouts[index].length < 4) {
      this.layouts[index].push([0]);
    }
  }

  addRow() {
    this.layouts.push([[0]]);
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

  constructor() { }

  ngOnInit(): void {
  }


}
