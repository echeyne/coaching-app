import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './athletes.component';
import { NgModule } from '@angular/core';
import { AthleteListComponent } from './athlete-list/athlete-list.component';

const athletesRoutes: Routes = [
  {
    path: 'athletes', component: AthletesComponent, children: [
      { path: '', component: AthleteListComponent }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( athletesRoutes ) ],
  exports: [ RouterModule ]
} )
export class AthletesRoutingModule {

}
