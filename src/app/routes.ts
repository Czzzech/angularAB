import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { BudgetsPreviewComponent } from "./components/budgets-preview/budgets-preview.component";
import { MainComponent } from "./components/main/main.component";
import {ContentComponent} from "./components/content/content.component";
import {AdminComponent} from "./components/admin/admin.component";

export const appRoutes : Routes = [
    {path : '', redirectTo : '/login', pathMatch : 'full'},
    {
        path : 'main',
        component : MainComponent,
        children : [
            {
                path : 'content',
                component : ContentComponent,
                children : [
                    {path : 'budgets-preview', component : BudgetsPreviewComponent},
                    {path : '', redirectTo : '/main/content/budgets-preview', pathMatch : 'full'}
                ]
            },
            {
                path : 'admin',
                component : AdminComponent,
                /*children : [
                    {path : 'budgets-preview', component : BudgetsPreviewComponent},
                    {path : '', redirectTo : '/main/content/budgets-preview', pathMatch : 'full'}
                ]*/
            },
            {path : '', redirectTo : '/main/content/budgets-preview', pathMatch : 'full'}
        ]
    },
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
];
