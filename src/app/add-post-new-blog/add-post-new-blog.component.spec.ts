import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostNewBlogComponent } from './add-post-new-blog.component';

describe('AddPostNewBlogComponent', () => {
  let component: AddPostNewBlogComponent;
  let fixture: ComponentFixture<AddPostNewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostNewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
