import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kashit1Component } from './components/kashit1/kashit1.component';
import { Kashit2Component } from './components/kashit2/kashit2.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { PanoramaComponent } from './components/panorama/panorama.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SetupComponent } from './layouts/setup/setup.component';

const routes: Routes = [
 
  {
    path: 'setup',
    component: SetupComponent,
    children: [
      {
        path: '',
        component: MapComponent,
        outlet: 'left'
      },
      {
        path: 'grids',
        component: Kashit1Component,
        outlet: 'top'
      },
      {
        path: 'grids',
        component: Kashit2Component,
        outlet: 'bottom'
      },
      {
        path: 'details',
        component: Kashit2Component,
        outlet: 'top'
      },
      {
        path: 'details',
        component: Kashit1Component,
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
