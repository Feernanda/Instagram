import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  base: any = [
    {
      heart: "assets/img/like.PNG",
      comment: "assets/img/comment.PNG",
      share: "assets/img/send.PNG",
      save: "assets/img/save.PNG",
      likes: "2304 Likes",
      img: "assets/img/cover 1.png",
      username: "Antonio",
      post: "Hi, im playing guitar",
      time: "5 minutes ago",
      smile: "assets/img/smile.PNG"
    },
    {
      heart: "assets/img/like.PNG",
      comment: "assets/img/comment.PNG",
      share: "assets/img/send.PNG",
      save: "assets/img/save.PNG",
      likes: "25,865 Likes",
      img: "assets/img/cover 2.png",
      username: "Roberto",
      post: "In a concert",
      time: "10 minutes ago",
      smile: "assets/img/smile.PNG"
    },
  {
    heart: "assets/img/like.PNG",
    comment: "assets/img/comment.PNG",
    share: "assets/img/send.PNG",
    save: "assets/img/save.PNG",
    likes: "30,000 Likes",
    img: "assets/img/cover 3.png",
    username: "Misa",
    post: "Look at my vinyl",
    time: "30 minutes ago",
    smile: "assets/img/smile.PNG"
  }   
]

  constructor() { }

  ngOnInit(): void {
  }

}
