import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OterChildOneComponent } from './oter-child-one.component';

describe('OterChildOneComponent', () => {
  let component: OterChildOneComponent;
  let fixture: ComponentFixture<OterChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OterChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OterChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
