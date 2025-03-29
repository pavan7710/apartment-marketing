import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../services/post.service';
import { loadPosts, loadPostSuccess, loadPostFailure } from './counter.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {
    console.log('Actions stream initialized:', actions$); // Debugging log
  }

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postService.fetchPosts().pipe(
          map((posts) => loadPostSuccess({ posts })),
          catchError((error) => of(loadPostFailure({ error: error.message })))
        )
      )
    )
  );
}