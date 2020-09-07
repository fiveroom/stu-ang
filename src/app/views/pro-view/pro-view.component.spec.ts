import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProViewComponent } from './pro-view.component';

describe('ProViewComponent', () => {
  let component: ProViewComponent;
  let fixture: ComponentFixture<ProViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
