import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticipantsService } from './services/participants.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
