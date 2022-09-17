import { Component, Input, OnInit } from '@angular/core';
import { CommentItem } from '../../comment.model';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
})
export class CommentEditComponent implements OnInit {
  @Input() comment: CommentItem = new CommentItem();

  constructor() {}

  ngOnInit(): void {}
}
