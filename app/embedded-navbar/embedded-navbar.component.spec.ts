import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedNavbarComponent } from './embedded-navbar.component';

describe('EmbeddedNavbarComponent', () => {
  let component: EmbeddedNavbarComponent;
  let fixture: ComponentFixture<EmbeddedNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbeddedNavbarComponent]
    });
    fixture = TestBed.createComponent(EmbeddedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
