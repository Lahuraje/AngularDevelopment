import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductionComponent } from './prod/production/production.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { SellComponent } from './sell/sell/sell.component';
import { WrokersComponent } from './wroker/wrokers/wrokers.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'sell',component:SellComponent},
  {path:'production',component:ProductionComponent},
  {path:'workers',component:WrokersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
