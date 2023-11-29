import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWebsocketComponent } from './test-websocket.component';

describe('TestWebsocketComponent', () => {
  let component: TestWebsocketComponent;
  let fixture: ComponentFixture<TestWebsocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestWebsocketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestWebsocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
