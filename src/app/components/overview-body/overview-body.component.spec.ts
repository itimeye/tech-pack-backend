import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBodyComponent } from './overview-body.component';

describe('OverviewBodyComponent', () => {
  let component: OverviewBodyComponent;
  let fixture: ComponentFixture<OverviewBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
