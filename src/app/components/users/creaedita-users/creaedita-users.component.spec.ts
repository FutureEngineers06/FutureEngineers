import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaeditaUsersComponent } from './creaedita-users.component';

describe('CreaeditaUsersComponent', () => {
  let component: CreaeditaUsersComponent;
  let fixture: ComponentFixture<CreaeditaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaeditaUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaeditaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
