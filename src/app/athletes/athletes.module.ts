import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

import { AthletesComponent } from './athletes.component';
import { AthletesRoutingModule } from './athletes-routing.module';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteStartComponent } from './athlete-start/athlete-start.component';

@NgModule( {
  declarations: [
    AthletesComponent,
    AthleteListComponent,
    AthleteStartComponent
  ],
  imports: [
    CommonModule,
    AthletesRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AthletesModule {
}
