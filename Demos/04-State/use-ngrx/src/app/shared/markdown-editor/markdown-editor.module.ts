import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material.module';
import { MarkdownEditorComponent } from './markdown-editor.component';
import { EditorEffects } from './state/editor.effects';
import { editorFeatureKey, editorReducer } from './state/editor.reducer';

const comps = [MarkdownEditorComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forFeature(editorFeatureKey, editorReducer),
    EffectsModule.forFeature([EditorEffects]),
  ],
})
export class MarkdownEditorModule {}
