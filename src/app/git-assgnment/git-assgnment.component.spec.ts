import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAssgnmentComponent } from './git-assgnment.component';

describe('GitAssgnmentComponent', () => {
  let component: GitAssgnmentComponent;
  let fixture: ComponentFixture<GitAssgnmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitAssgnmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitAssgnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
