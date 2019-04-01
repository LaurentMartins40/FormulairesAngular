import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptFirstComponent } from './typescript-first.component';

describe('TypescriptFirstComponent', () => {
  let component: TypescriptFirstComponent;
  let fixture: ComponentFixture<TypescriptFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
