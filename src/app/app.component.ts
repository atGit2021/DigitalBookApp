import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cover', url: '/cover' },
    { title: 'Table of Contents', url: '/toc' },
    { title: 'Chapter 1', url: '/chapter1'},
    { title: 'Chapter 2', url: '/chapter2'  },
  ];
 
  constructor() {}
}
