import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsNewComponent } from './destinations-new.component';

describe('DestinationsNewComponent', () => {
  let component: DestinationsNewComponent;
  let fixture: ComponentFixture<DestinationsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
