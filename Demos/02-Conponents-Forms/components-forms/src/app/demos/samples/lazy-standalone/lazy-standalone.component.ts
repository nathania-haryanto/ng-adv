import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MdRendererModule } from 'src/app/shared/markdown-renderer/md-renderer.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-standalone',
  standalone: true,
  imports: [CommonModule, MarkdownModule, MdRendererModule, RouterModule],
  templateUrl: './lazy-standalone.component.html',
  styleUrls: ['./lazy-standalone.component.scss'],
})
export class LazyStandaloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
