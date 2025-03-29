import { createReducer , on } from '@ngrx/store'
import {  loadPostFailure, loadPosts, loadPostSuccess } from './counter.action'
import { Post } from '../services/post.service'


export interface PostState {
    posts : Post[];
    error : string | null
}

const initialState : PostState = {
    posts : [],
    error : null
}

// const initialState = 10



export const counterReducer = createReducer(
    initialState,
    // on(increment , (state , action) => state + action.value),
    // on(decrement , (state , action) => state - action.value)

    on(loadPosts , (state) => ({...state , error : null})),
    on(loadPostSuccess , (state , { posts }) => ({...state , posts})),
    on(loadPostFailure , (state , {error}) => ({...state , error}) ) 

)