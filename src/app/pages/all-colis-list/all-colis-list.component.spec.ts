import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllColisListComponent } from './all-colis-list.component';

describe('ColisListComponent', () => {
  let component: AllColisListComponent;
  let fixture: ComponentFixture<AllColisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllColisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllColisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
