// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PostsComponent } from './posts.component';

// describe('PostsComponent', () => {
//   let component: PostsComponent;
//   let fixture: ComponentFixture<PostsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [PostsComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(PostsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { of } from 'rxjs';
import { Post } from 'src/app/models/Post'
import { PostsComponent } from './posts.component'

describe( "posts Component" , () => {
  let POSTS : Post[]
  let component:PostsComponent;
  let mockPostService: any
  
  beforeEach(() => {
    POSTS = [
      {
        id : 1,
        body : 'body 1',
        title : 'title',
        userId : 1
      },
      {
        id : 2,
        body : 'body 2',
        title : 'title',
        userId : 2
      },
      {
        id : 3,
        body : 'body 3',
        title : 'title',
        userId : 3
      },
    ]

    mockPostService = jasmine.createSpyObj(['getPosts' , 'deletePost'])
    component = new PostsComponent(mockPostService)
  })

  describe('delete' , () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true))
      component.posts = POSTS
    })

    it("should delete the selected Post from the posts" , () => {
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2)
    })

    it('should delete the actual selected Post in Posts' , () => {
      component.delete(POSTS[1])

      for(let post of component.posts){
        expect(post).not.toEqual(POSTS[1])
      }

    })

    it("should call the delete method in post service only once" , () => {
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
    })

  })
  
})
