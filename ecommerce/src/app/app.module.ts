import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { SellComponent } from './sell/sell/sell.component';
import { ProductionComponent } from './prod/production/production.component';
import { WrokersComponent } from './wroker/wrokers/wrokers.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PurchaseComponent,
    SellComponent,
    ProductionComponent,
    WrokersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
