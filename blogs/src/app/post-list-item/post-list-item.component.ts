import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post : Post;

  constructor() { }

  ngOnInit() {
  }

  onIncreaseLoveIts() {
    this.post.increaseLoveIts();
  }

  onDecreaseLoveIts() {
    this.post.decreaseLoveIts();
  }

  getItemBgColor() {
    return this.post.loveIts > 0 ? '#82C46C' : this.post.loveIts < 0 ? '#FF4901' : 'white';
  }

  getItemColor() {
    return this.post.loveIts > 0 ? '#096A09' : this.post.loveIts < 0 ? '#801818' : 'black';
  }
}
