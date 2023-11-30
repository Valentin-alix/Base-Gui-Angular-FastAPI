import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutesComponent } from './test-routes.component';

describe('TestRoutesComponent', () => {
  let component: TestRoutesComponent;
  let fixture: ComponentFixture<TestRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
