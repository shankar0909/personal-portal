import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-hugging-face-chatbot',
  imports: [],
  templateUrl: './hugging-face-chatbot.component.html',
  styleUrl: './hugging-face-chatbot.component.scss'
})
export class HuggingFaceChatbotComponent {
  isOpen = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
}
