import { Component , EventEmitter , Input , Output , OnInit } from '@angular/core';
import { Post } from "src/app/models/Post"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  @Input() post:Post | null = null 
  @Output() delete = new EventEmitter<void>()
  ngOnInit(): void {
    
  }
  onDeletePost(event:Event){
    event.stopPropagation()
    this.delete.emit()
  }
}
