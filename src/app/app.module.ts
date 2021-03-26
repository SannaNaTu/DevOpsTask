import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatOptionModule, MatSelectModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import {CalculatorComponent} from './calculator/calculator.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FeedBackComponent} from './feed-back/feed-back.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';
import {HttpClientModule} from '@angular/common/http';
import {FinnkinoPipe} from './pipe/finnkino.pipe';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth/auth.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {CurrencyExchangeComponent} from './currency-exchange/currency-exchange.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CurrencySelectorComponent } from './currency-exchange/currency-selector/currency-selector.component';
import { LoadingSpinnerComponent } from './currency-exchange/loading-spinner/loading-spinner.component';
import { CurrencyListComponent } from './currency-exchange/currency-list/currency-list.component';
import { CurrencyListItemComponent } from './currency-exchange/currency-list-item/currency-list-item.component';
import { MoneyComponent } from './currency-exchange/money/money.component';
import { UserService} from './service/user.service';
import { UserComponent } from './user/user.component';
import {UserResolver} from './user/user.resolver';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CalculatorComponent,
    TemplateDrivenFormComponent,
    PageNotFoundComponent,
    FeedBackComponent,
    FinnkinoComponent,
    FinnkinoPipe,
    ReactiveFormComponent,
    CurrencyExchangeComponent,
    AdminViewComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    LogoutComponent,
    CurrencySelectorComponent,
    LoadingSpinnerComponent,
    CurrencyListComponent,
    CurrencyListItemComponent,
    MoneyComponent,
    UserComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatSelectModule,




  ],
  providers: [AuthService, AuthGuard, UserService, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
// AuthService, AuthGuard
