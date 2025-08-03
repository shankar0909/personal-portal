import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuggingFaceChatbotComponent } from './hugging-face-chatbot.component';

describe('HuggingFaceChatbotComponent', () => {
  let component: HuggingFaceChatbotComponent;
  let fixture: ComponentFixture<HuggingFaceChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuggingFaceChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuggingFaceChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
