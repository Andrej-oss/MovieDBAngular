import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input()
  vote: number;
  smallRating: any[] = [...Array(5)];

  constructor() {
  }

  ngOnInit(): void {
    this.vote = Math.round(this.vote) / 2;
    this.smallRating = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  }

}
