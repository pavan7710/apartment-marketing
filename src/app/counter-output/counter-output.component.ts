import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable  } from 'rxjs'
import { selectCount } from '../store/counter.selector';
import { Post, PostService } from '../services/post.service';
import { PostState } from '../store/counter.reducer';
import { loadPosts } from '../store/counter.action';
 
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {
    // count$ : Observable<number>;

    // constructor(private store : Store<{counter : number}>){
    //   this.count$ = store.select(selectCount)
    // }

    posts$ : Observable<Post[]>;
    error$ : Observable<string | null>;

    constructor(private store : Store <{posts: PostState}>) {
      this.posts$ = this.store.select((state) => state.posts.posts);
      this.error$ = this.store.select((state) => state.posts.error)
      console.log(this.posts$)
    }

    onLoadPosts() : void {
      this.store.dispatch(loadPosts())
    }
}