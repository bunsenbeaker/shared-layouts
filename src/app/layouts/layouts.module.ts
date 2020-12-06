import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule} from '@angular/router';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [DefaultLayoutComponent, SetupComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
