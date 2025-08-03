import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { ContactComponent } from './contact/contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HuggingFaceChatbotComponent } from './hugging-face-chatbot/hugging-face-chatbot.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NotesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PdfViewerModule,
    HuggingFaceChatbotComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
