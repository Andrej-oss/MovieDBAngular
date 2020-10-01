import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../models/review';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Review;
  isDone: boolean;
  isLike: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isDone = false;
    this.isLike = false;
  }

  toDone(): void {
    this.isDone = !this.isDone;
  }

  doLike(): void {
    this.isLike = !this.isLike;
  }
}
