import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomesPage } from './nomes.page';

describe('NomesPage', () => {
  let component: NomesPage;
  let fixture: ComponentFixture<NomesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
