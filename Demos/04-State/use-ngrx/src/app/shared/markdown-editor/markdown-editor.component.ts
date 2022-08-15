import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { SnackbarService } from '../snackbar/snackbar.service';
import { CommentItem } from './comment.model';
import { EditorFacade } from './state/editor.facade';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  constructor(private sns: SnackbarService, private ef: EditorFacade) {}

  @Input() component: string;

  comments = this.ef.getComments();
  editorEdit = false;
  current: CommentItem;

  ngOnInit() {
    this.ef.hasLoaded().subscribe((hasLoaded) => {
      if (hasLoaded == false) {
        this.ef.init();
      }
    });
  }

  saveComment() {
    this.ef.saveComment(this.current);
  }

  editComment(c: CommentItem) {
    this.current = c;
    this.editorEdit = true;
  }
}
