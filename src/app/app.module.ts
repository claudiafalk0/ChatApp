import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';

import { ChatService } from '@src/app/chat.service';
import { ChatComponent } from '@src/app/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '@src/app/navbar/navbar.component';
import { CallbackComponent } from '@src/app/callback/callback.component';
import { ProfileComponent } from '@src/app/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
