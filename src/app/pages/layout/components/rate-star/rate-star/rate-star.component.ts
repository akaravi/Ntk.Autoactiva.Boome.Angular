import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate-star',
  templateUrl: './rate-star.component.html',
  styleUrls: ['./rate-star.component.css']
})
export class RateStarComponent {

  // starRating = 1; 

  @Input() starRating: number = 1;

  width: number = 150;


}
