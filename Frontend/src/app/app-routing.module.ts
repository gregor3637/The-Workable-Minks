import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MessagesComponent } from "./messages/messages.component";
import { NgModule } from '@angular/core';
import { ReadPersonalMessageComponent } from "./personal-messaging/read-personal-message/read-personal-message.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: 'users', loadChildren: './users/users.module#UsersModule'}
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'messages/:name',
        component: MessagesComponent
    },
    {
        path: 'personal-messages',
        component: ReadPersonalMessageComponent
    },
    {
        path: 'personal-messages/:name',
        component: ReadPersonalMessageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }