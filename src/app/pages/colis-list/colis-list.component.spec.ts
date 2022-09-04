import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisListComponent } from './colis-list.component';

describe('ColisListComponent', () => {
  let component: ColisListComponent;
  let fixture: ComponentFixture<ColisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
