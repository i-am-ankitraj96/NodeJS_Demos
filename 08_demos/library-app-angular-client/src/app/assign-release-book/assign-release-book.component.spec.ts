import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignReleaseBookComponent } from './assign-release-book.component';

describe('AssignReleaseBookComponent', () => {
  let component: AssignReleaseBookComponent;
  let fixture: ComponentFixture<AssignReleaseBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignReleaseBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignReleaseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
