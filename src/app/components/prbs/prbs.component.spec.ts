import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrbsComponent } from './prbs.component';

describe('PrbsComponent', () => {
  let component: PrbsComponent;
  let fixture: ComponentFixture<PrbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
