import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanoramaComponent } from './components/panorama/panorama.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MapComponent } from './components/map/map.component';
import { Kashit1Component } from './components/kashit1/kashit1.component';
import { Kashit2Component } from './components/kashit2/kashit2.component';
import { MatanComponent } from './components/matan/matan.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PanoramaComponent,
    MapComponent,
    Kashit1Component,
    Kashit2Component,
    MatanComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
