import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapiComponent } from './getapi.component';

describe('GetapiComponent', () => {
  let component: GetapiComponent;
  let fixture: ComponentFixture<GetapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
