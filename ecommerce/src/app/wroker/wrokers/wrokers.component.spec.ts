import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrokersComponent } from './wrokers.component';

describe('WrokersComponent', () => {
  let component: WrokersComponent;
  let fixture: ComponentFixture<WrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrokersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
