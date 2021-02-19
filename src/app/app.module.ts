import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NoteboxComponent } from './components/notebox/notebox.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NoteboxComponent,
    NotesContainerComponent,
    InputboxComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
   CommonModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
