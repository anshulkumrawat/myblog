import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostNewBlogComponent } from './get-post-new-blog.component';

describe('GetPostNewBlogComponent', () => {
  let component: GetPostNewBlogComponent;
  let fixture: ComponentFixture<GetPostNewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPostNewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
