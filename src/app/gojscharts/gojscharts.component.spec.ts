import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GojschartsComponent } from './gojscharts.component';

describe('GojschartsComponent', () => {
  let component: GojschartsComponent;
  let fixture: ComponentFixture<GojschartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GojschartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GojschartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
