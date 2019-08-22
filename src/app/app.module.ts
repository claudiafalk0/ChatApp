import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';

import { ChatService } from '@src/app/chat.service';
import { ChatComponent } from '@src/app/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import {CallbackComponent} from "@src/app/callback/callback.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      ChatService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
