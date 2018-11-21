import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { BudgetsPreviewComponent } from "./components/budgets-preview/budgets-preview.component";

export const appRoutes : Routes = [
    {path : '', redirectTo : '/login', pathMatch : 'full'},
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    {
        path : 'content',
        component : LoginComponent,
        children : [
                {path : 'budgets-preview', component : BudgetsPreviewComponent}
            ]
    },
];
