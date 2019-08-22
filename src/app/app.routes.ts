import { Routes } from '@angular/router';
import { ChatComponent } from '@src/app/chat/chat.component';
import {AuthGuard} from "@src/app/auth/auth.guard";
// import {CallbackComponent} from "callback.component.ts";
import { HomeComponent } from '@src/app/home/home.component';
import { CallbackComponent } from '@src/app/callback/callback.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'callback',
        component: CallbackComponent
    }
];
