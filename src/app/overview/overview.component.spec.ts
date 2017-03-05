import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepcountComponent } from './stepcount.component';

describe('StepcountComponent', () => {
  let component: StepcountComponent;
  let fixture: ComponentFixture<StepcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
