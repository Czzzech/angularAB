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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { GridHeaderComponent } from './components/grid/grid-header/grid-header.component';
import { GridItemComponent } from './components/grid/grid-item/grid-item.component';
import { GridFilterComponent } from './components/grid/grid-filter/grid-filter.component';
import { GridPaginatorComponent } from './components/grid/grid-paginator/grid-paginator.component';
import { GridSummaryComponent } from './components/grid/grid-summary/grid-summary.component';
import { WishlistTitleColumnComponent } from './components/grid/grid-columns/wishlist/wishlist-title-column/wishlist-title-column.component';
import { DynamicComponentsLoadDirective } from './directives/dynamic-components-load.directive';
import { GridBaseColumnComponent } from './components/grid/grid-columns/grid-base-column/grid-base-column.component';
import { GridHeaderCellComponent } from './components/grid/grid-header-cell/grid-header-cell.component';
import { GridCellComponent } from './components/grid/grid-cell/grid-cell.component';
import { DescriptionColumnComponent } from './components/grid/grid-columns/description-column/description-column.component';
import { WishlistPanelComponent } from './components/wishlist-panel/wishlist-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalHeaderComponent } from './components/modal/modal-header/modal-header.component';
import { ModalContentComponent } from './components/modal/modal-content/modal-content.component';
import { ModalFooterComponent } from './components/modal/modal-footer/modal-footer.component';
import { BaseFieldComponent } from './components/fields/base-field/base-field.component';
import { FieldComponent } from './components/form/field/field.component';

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
    GridComponent,
    GridHeaderComponent,
    GridItemComponent,
    GridFilterComponent,
    GridPaginatorComponent,
    GridSummaryComponent,
    WishlistTitleColumnComponent,
    DynamicComponentsLoadDirective,
    GridBaseColumnComponent,
    GridHeaderCellComponent,
    GridCellComponent,
    DescriptionColumnComponent,
    WishlistPanelComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    BaseFieldComponent,
    FieldComponent
  ],
  entryComponents: [
    GridBaseColumnComponent,
    WishlistTitleColumnComponent,
    DescriptionColumnComponent,
    ModalComponent,
    FormComponent,
    TextFieldComponent,
    DateFieldComponent
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
