import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketsPageComponent } from './buckets-page.component';

describe('BucketsPageComponent', () => {
  let component: BucketsPageComponent;
  let fixture: ComponentFixture<BucketsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
