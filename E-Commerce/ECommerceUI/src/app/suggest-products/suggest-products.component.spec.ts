import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestProductsComponent } from './suggest-products.component';

describe('SuggestProductsComponent', () => {
  let component: SuggestProductsComponent;
  let fixture: ComponentFixture<SuggestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
