import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMockstoreComponent } from './ngrx-mockstore.component';

describe('NgrxMockstoreComponent', () => {
  let component: NgrxMockstoreComponent;
  let fixture: ComponentFixture<NgrxMockstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxMockstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxMockstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
