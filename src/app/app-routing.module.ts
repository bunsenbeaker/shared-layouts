import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { Kashit1Component } from './components/kashit1/kashit1.component';
import { Kashit2Component } from './components/kashit2/kashit2.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { PanoramaComponent } from './components/panorama/panorama.component';
import { SideComponent } from './components/side/side.component';
import { TargetDetailsComponent } from './components/target-details/target-details.component';
import { TargetsGridComponent } from './components/targets-grid/targets-grid.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { KssComponent } from './layouts/kss/kss.component';
import { SetupComponent } from './layouts/setup/setup.component';

const routes: Routes = [
 {
   path: 'kss',
   component: KssComponent,
   children: [
    {
      path: '',
      component: MapComponent,
      outlet: 'main'
    },
    {
      path: 'grids',
      component: TargetsGridComponent,
      outlet: 'top'
    },
    {
      path: 'grids',
      component: EventsGridComponent,
      outlet: 'bottom'
    },
    {
      path: 'details',
      component: TargetsGridComponent,
      outlet: 'top'
    },
    {
      path: 'details',
      component: TargetDetailsComponent,
      outlet: 'bottom'
    }
   ]
 }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
