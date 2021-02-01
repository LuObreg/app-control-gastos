import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInComponent } from './user-in.component';

describe('UserInComponent', () => {
  let component: UserInComponent;
  let fixture: ComponentFixture<UserInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
