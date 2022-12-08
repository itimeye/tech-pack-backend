import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTopComponent } from './overview-top.component';

describe('OverviewTopComponent', () => {
  let component: OverviewTopComponent;
  let fixture: ComponentFixture<OverviewTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
