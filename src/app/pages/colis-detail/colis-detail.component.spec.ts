import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisDetailComponent } from './colis-detail.component';

describe('ColisDetailComponent', () => {
  let component: ColisDetailComponent;
  let fixture: ComponentFixture<ColisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
