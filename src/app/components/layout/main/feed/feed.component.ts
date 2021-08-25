import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  base: any = [
    {
      img: "assets/img/cover 1.png",
      p: "Hi, im playing!"
    },
    {
      img: "assets/img/cover 2.png",
      p: "Hi, im playing!"
    },
    {
      img: "assets/img/cover 3.png",
      p: "Hi, im playing!"
    }   
]

  constructor() { }

  ngOnInit(): void {
  }

}
