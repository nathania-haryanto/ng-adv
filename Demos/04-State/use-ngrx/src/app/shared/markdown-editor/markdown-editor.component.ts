import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { CommentItem } from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  constructor(private sns: SnackbarService, private cs: CommentService) {}

  @Input() component: string;

  comments = this.cs.getComments();
  editorEdit = false;
  current: CommentItem;

  ngOnInit() {}

  saveComment() {
    this.sns.displayAlert('saving', this.component);
  }

  editComment(c: CommentItem) {
    this.current = c;
    this.editorEdit = true;
  }
}
