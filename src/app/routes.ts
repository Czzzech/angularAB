import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { BudgetsPreviewComponent } from "./components/budgets-preview/budgets-preview.component";
import { MainComponent } from "./components/main/main.component";

export const appRoutes : Routes = [
    {path : '', redirectTo : '/login', pathMatch : 'full'},
    {path : 'main', component : MainComponent},
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
];
