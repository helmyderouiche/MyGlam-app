import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbgComponent } from './footerbg.component';

describe('FooterbgComponent', () => {
  let component: FooterbgComponent;
  let fixture: ComponentFixture<FooterbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
