import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcluidoPage } from './concluido.page';

describe('ConcluidoPage', () => {
  let component: ConcluidoPage;
  let fixture: ComponentFixture<ConcluidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
