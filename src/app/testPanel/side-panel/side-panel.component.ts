import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-side-panel",
  templateUrl: "./side-panel.component.html",
  styleUrls: ["./side-panel.component.scss"]
})
export class SidePanelComponent implements OnInit {
  showFiller = false;

  //drag drop testing
  numbers: number[] = [];
  otherNumbers: number[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container;
    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
