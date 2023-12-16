import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title: string = ""
  constructor(private router: Router, private titleService: Title) {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.title = event.snapshot.title ?? ''
      }
    })
  }
}
