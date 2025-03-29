import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


export interface Post {
    userId : number ;
    id : number ; 
    title : string ;
    body : string
}


@Injectable({
    providedIn : 'root'
})
export class PostService {
    constructor(private http: HttpClient) {}

    fetchPosts(): Observable<any> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    }
}