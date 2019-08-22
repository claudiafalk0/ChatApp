import { Routes } from '@angular/router';
import { ChatComponent } from '@src/app/chat/chat.component';
import {AuthGuard} from "@src/app/auth/auth.guard";
import { HomeComponent } from '@src/app/home/home.component';
import { CallbackComponent } from '@src/app/callback/callback.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        component: HomeComponent,
        canActivate: [
            AuthGuard
        ]
    },
    {
        path: 'callback',
        component: CallbackComponent,
    }
];
