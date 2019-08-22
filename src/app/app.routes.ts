import { Routes } from '@angular/router';
import { ChatComponent } from '@src/app/chat/chat.component';
import {AuthGuard} from "@src/app/auth/auth.guard";
// import {CallbackComponent} from "callback.component.ts";
import { CallbackComponent } from "@src/app/callback/callback.component";

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'chat',
      component: ChatComponent,
  },
    {
        path: 'callback',
        component: CallbackComponent
    }
];
