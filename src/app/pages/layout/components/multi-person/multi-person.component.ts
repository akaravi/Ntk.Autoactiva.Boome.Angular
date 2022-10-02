import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-person',
  templateUrl: './multi-person.component.html',
  styleUrls: ['./multi-person.component.css']
})
export class MultiPersonComponent implements OnInit {

  @Input() rating: number = 1;


  width: number = 90;

  constructor() { }

  ngOnInit(): void {
    this.width = (this.rating * 95) / 5;
  }


}
