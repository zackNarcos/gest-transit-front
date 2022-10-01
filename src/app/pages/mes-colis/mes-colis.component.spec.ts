import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesColisComponent } from './mes-colis.component';

describe('MesColisComponent', () => {
  let component: MesColisComponent;
  let fixture: ComponentFixture<MesColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesColisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
