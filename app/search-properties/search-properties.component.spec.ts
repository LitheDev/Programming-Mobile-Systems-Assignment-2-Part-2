import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPropertiesComponent } from './search-properties.component';

describe('SearchPropertiesComponent', () => {
  let component: SearchPropertiesComponent;
  let fixture: ComponentFixture<SearchPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPropertiesComponent]
    });
    fixture = TestBed.createComponent(SearchPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
