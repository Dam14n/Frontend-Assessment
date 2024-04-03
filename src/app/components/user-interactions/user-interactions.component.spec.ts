import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionsComponent } from './user-interactions.component';

describe('UserInteractionsComponent', () => {
  let component: UserInteractionsComponent;
  let fixture: ComponentFixture<UserInteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
