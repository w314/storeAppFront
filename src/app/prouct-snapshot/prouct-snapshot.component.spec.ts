import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctSnapshotComponent } from './prouct-snapshot.component';

describe('ProuctSnapshotComponent', () => {
  let component: ProuctSnapshotComponent;
  let fixture: ComponentFixture<ProuctSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuctSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuctSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
