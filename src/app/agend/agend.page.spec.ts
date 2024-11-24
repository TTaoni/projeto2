import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendPage } from './agend.page';

describe('AgendPage', () => {
  let component: AgendPage;
  let fixture: ComponentFixture<AgendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
