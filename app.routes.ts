import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from "app/login/login.component";
import { CreationComponent } from "app/creation/creation.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreationComponent },
    { path: '**', component: ErrorComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)