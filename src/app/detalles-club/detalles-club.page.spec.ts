import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClubPage } from './detalles-club.page';

describe('DetallesClubPage', () => {
  let component: DetallesClubPage;
  let fixture: ComponentFixture<DetallesClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
