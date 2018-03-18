import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentnowComponent } from './rentnow.component';

describe('RentnowComponent', () => {
  let component: RentnowComponent;
  let fixture: ComponentFixture<RentnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
