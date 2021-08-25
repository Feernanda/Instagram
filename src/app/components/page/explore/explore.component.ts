import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['assets/img/img1.jpg', 'assets/img/img2.jpg', 'assets/img/im3.jpg','assets/img/img4.jpg'];
}
