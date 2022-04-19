import { Component, OnInit, OnChanges, Input, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  // isChild = false;
  isChild = true;
  @Input()
  channelName = "";

  constructor() {
    console.log('Parent Constructor');
  }
  ngOnInit(): void {
    console.log('Parent ngonInit');

  }
  ngOnChanges() {
    console.log('Parent OnChanges');
  }
  ngDoCheck() {
    console.log('Parent Do Check is called');
  }
  toggleOf() {
    this.isChild = !this.isChild;
  }

}
