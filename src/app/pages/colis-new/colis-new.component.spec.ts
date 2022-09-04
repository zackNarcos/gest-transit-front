import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisNewComponent } from './colis-new.component';

describe('ColisNewComponent', () => {
  let component: ColisNewComponent;
  let fixture: ComponentFixture<ColisNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
