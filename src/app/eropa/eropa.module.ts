import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { LigaChampionsComponent } from './liga-champions/liga-champions.component';
import { LigaInggrisComponent } from './liga-inggris/liga-inggris.component';
import { LigaSpanyolComponent } from './liga-spanyol/liga-spanyol.component';
import { LigaItaliaComponent } from './liga-italia/liga-italia.component';
import { LigaPerancisComponent } from './liga-perancis/liga-perancis.component';
import { LainLainComponent } from './lain-lain/lain-lain.component';

const routingEropa : Route[] = [
  {path: 'eropa/inggris', component: LigaInggrisComponent},
  {path: 'eropa/champions', component: LigaChampionsComponent},
  {path: 'eropa/spanyol', component: LigaSpanyolComponent},
  {path: 'eropa/italia', component: LigaItaliaComponent},
  {path: 'eropa/perancis', component: LigaPerancisComponent},
  {path: 'eropa/others', component: LainLainComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingEropa)
  ],
  declarations: [LigaChampionsComponent, LigaInggrisComponent, LigaSpanyolComponent, LigaItaliaComponent, LigaPerancisComponent, LainLainComponent]
})
export class EropaModule { }
