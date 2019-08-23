import { Routes } from '@angular/router';
import { ChatComponent } from '@src/app/chat/chat.component';
import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ChatComponent
    }
    ]
