import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonalMessageComponent } from './new-personal-message.component';

describe('NewPersonalMessageComponent', () => {
  let component: NewPersonalMessageComponent;
  let fixture: ComponentFixture<NewPersonalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonalMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
