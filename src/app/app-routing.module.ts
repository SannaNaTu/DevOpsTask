import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FeedBackComponent} from './feed-back/feed-back.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {LoginComponent} from './login/login.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AuthGuard} from './auth.guard';
import {LogoutComponent} from './logout/logout.component';
import {CurrencyExchangeComponent} from './currency-exchange/currency-exchange.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'templateDrivenForm', component: TemplateDrivenFormComponent},
  {path: 'feedback', component: FeedBackComponent},
  {path: 'finnkino', component: FinnkinoComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'currencyExchange', component: CurrencyExchangeComponent},
  {path: 'admin/login', component: AdminViewComponent},
  {path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  // aina alin
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

