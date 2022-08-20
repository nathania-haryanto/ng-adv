import { Component, OnInit } from '@angular/core';
import { CommentItem } from '../../comment.model';
import { EditorFacade } from '../../state/editor.facade';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
})
export class EditorContainerComponent implements OnInit {
  constructor(private ef: EditorFacade) {}

  comments = this.ef.getComments();
  editorEdit = false;
  current: CommentItem;

  ngOnInit() {
    this.ef.hasLoaded().subscribe((hasLoaded) => {
      if (hasLoaded == false) {
        this.ef.init();
      }
    });

    //respond to effect completion and toggle view
    this.ef.callCompleted$.subscribe(() => {
      this.editorEdit = false;
    });
  }

  addComment() {
    this.current = new CommentItem();
    this.editorEdit = true;
  }

  saveComment() {
    this.ef.saveComment(this.current);
  }

  deleteComment(item: CommentItem) {
    this.ef.deleteComment(item);
  }

  editComment(item: CommentItem) {
    this.current = { ...item };
    this.editorEdit = true;
  }
}
