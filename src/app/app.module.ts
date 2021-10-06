import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { MyordersComponent } from './myorders/myorders.component';
import { SmartlistComponent } from './smartlist/smartlist.component';
import { OffersComponent } from './offers/offers.component';
import { TrackordersComponent } from './myorders/trackorders/trackorders.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowmoreComponent } from './showmore/showmore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    MyordersComponent,
    SmartlistComponent,
    OffersComponent,
    TrackordersComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    ShowmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
