import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPersonalMessageComponent } from './read-personal-message.component';

describe('ReadPersonalMessageComponent', () => {
  let component: ReadPersonalMessageComponent;
  let fixture: ComponentFixture<ReadPersonalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPersonalMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPersonalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
