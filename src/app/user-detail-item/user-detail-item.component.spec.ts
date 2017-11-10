import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailItemComponent } from './user-detail-item.component';

describe('UserDetailItemComponent', () => {
  let component: UserDetailItemComponent;
  let fixture: ComponentFixture<UserDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
