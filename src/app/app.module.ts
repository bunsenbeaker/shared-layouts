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
import { SideComponent } from './components/side/side.component';
import { HeaderComponent } from './components/header/header.component';
import { TargetsGridComponent } from './components/targets-grid/targets-grid.component';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { TargetDetailsComponent } from './components/target-details/target-details.component';
import { TargetsTableComponent } from './components/targets-table/targets-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PanoramaComponent,
    MapComponent,
    Kashit1Component,
    Kashit2Component,
    MatanComponent,
    NavComponent,
    SideComponent,
    HeaderComponent,
    TargetsGridComponent,
    EventsGridComponent,
    TargetDetailsComponent,
    TargetsTableComponent
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
