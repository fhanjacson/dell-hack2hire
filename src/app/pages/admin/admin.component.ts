import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listOfWidgets = [1, 2, 3, 4, 5];
  layouts = [[[1], [3]], [[2], []], [[]]];
  // tempArray = [];[]
  isEmpty = true;

  addColumn(index: number) {
    if (this.layouts[index].length < 5) {
      this.layouts[index].push([]);
    }
    console.log(this.layouts);
  }

  addRow() {
    this.layouts.push([]);
    console.log(this.layouts);

  }

  drop(event: CdkDragDrop<any>) {
    // console.log(event.container);
    console.log([[]]);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container.data.length);
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }

  }

  constructor() { }

  ngOnInit(): void {
  }


}
