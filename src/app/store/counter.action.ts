import { createAction , props } from "@ngrx/store"
import { Post } from "../services/post.service"


export const loadPosts = createAction('[Post] Load Posts')

export const loadPostSuccess = createAction(
    '[Post] Load Posts Success',
    props<{ posts: Post[] }>()
)

export const loadPostFailure = createAction(
    '[Post] Load Posts Failure',
    props<{error : string}>()
)