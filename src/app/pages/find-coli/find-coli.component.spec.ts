import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindColiComponent } from './find-coli.component';

describe('FindColiComponent', () => {
  let component: FindColiComponent;
  let fixture: ComponentFixture<FindColiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindColiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindColiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
