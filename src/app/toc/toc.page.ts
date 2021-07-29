import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {

  public chapters = [
    {
      title: "Cover",
      url: "/cover"
    },
    {
      title: "Table of Contents",
      url: "/toc"
    },
    {
      title: "Chapter 1 | Flowers",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Animals",
      url: "/chapter2"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
