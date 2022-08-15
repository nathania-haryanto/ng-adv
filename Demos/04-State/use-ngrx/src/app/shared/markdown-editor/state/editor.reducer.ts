import { createReducer, on } from '@ngrx/store';
import { CommentItem } from '../comment.model';
import {
  loadCommentsFailure,
  loadCommentsSuccess,
  saveCommentFailure,
  saveCommentSuccess,
} from './editor.actions';

// State
export const editorFeatureKey = 'mdeditor';

export interface EditorState {
  comments: CommentItem[];
  hasLoaded: boolean;
}

export const initialEditorState: EditorState = {
  comments: [],
  hasLoaded: false,
};

// Reducer
export const editorReducer = createReducer(
  initialEditorState,
  on(loadCommentsSuccess, (state, action) => {
    return { ...state, comments: action.items, hasLoaded: true };
  }),
  on(saveCommentSuccess, (state, action) => {
    //TODO: Implement proper save reducer
    return { ...state, comments: [] };
  }),
  on(loadCommentsFailure, saveCommentFailure, (state, action) => {
    return { ...state };
  })
);
