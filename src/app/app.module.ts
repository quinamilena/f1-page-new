import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { HomeComponent } from './pages/home/home.component';
import { CircuitsModule } from './pages/circuits/circuits.module';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    SeasonsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    CircuitsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
