import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {  MatButtonModule,
          MatInputModule,
          MatSelectModule,
          MatSlideToggleModule,
          MatAutocompleteModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ParticipantsService } from './services/participants.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [
    ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
