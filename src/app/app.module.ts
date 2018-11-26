import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormComponent } from './components/form/form.component';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { DateFieldComponent } from './components/fields/date-field/date-field.component';
import { BudgetsPreviewComponent } from './components/budgets-preview/budgets-preview.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { EmailComponent } from './components/fields/email/email.component';
import { PasswordComponent } from './components/fields/password/password.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { BudgetCardComponent } from './components/budget-card/budget-card.component';
import { WishInBudgetsPreviewComponent } from './components/wish-in-budgets-preview/wish-in-budgets-preview.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent,
    TextFieldComponent,
    DateFieldComponent,
    BudgetsPreviewComponent,
    EmailComponent,
    PasswordComponent,
    ForgotComponent,
    MainComponent,
    AdminComponent,
    BudgetCardComponent,
    WishInBudgetsPreviewComponent,
    WishlistComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
