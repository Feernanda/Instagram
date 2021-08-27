import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  base: any = [
    {
      img: "assets/img/shop1.jpg",
    },
    {
      img: "assets/img/shop2.jpg",
    },
    {
      img: "assets/img/shop3.jpg",
    },
    {
      img: "assets/img/shop4.jpg",
    },
    {
      img: "assets/img/shop5.jpg",
    },
    {
      img: "assets/img/shop6.jpg",
    }
    
]

  ngOnInit(): void {
  }

}
