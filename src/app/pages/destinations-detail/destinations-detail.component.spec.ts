import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsDetailComponent } from './destinations-detail.component';

describe('DestinationsDetailComponent', () => {
  let component: DestinationsDetailComponent;
  let fixture: ComponentFixture<DestinationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
