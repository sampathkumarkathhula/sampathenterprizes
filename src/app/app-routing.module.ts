import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { MyordersComponent } from './myorders/myorders.component';
import { TrackordersComponent } from './myorders/trackorders/trackorders.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SmartlistComponent } from './smartlist/smartlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'items', component:ItemsComponent},
  {path:'myorders', component:MyordersComponent},
  {path:'smartlist', component:SmartlistComponent},
  {path:'offers', component:OffersComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'trackorders', component:TrackordersComponent},
 
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

