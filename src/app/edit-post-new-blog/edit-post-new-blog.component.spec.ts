import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostNewBlogComponent } from './edit-post-new-blog.component';

describe('EditPostNewBlogComponent', () => {
  let component: EditPostNewBlogComponent;
  let fixture: ComponentFixture<EditPostNewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostNewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
