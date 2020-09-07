import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OterChildTwoComponent } from './oter-child-two.component';

describe('OterChildTwoComponent', () => {
  let component: OterChildTwoComponent;
  let fixture: ComponentFixture<OterChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OterChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OterChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
