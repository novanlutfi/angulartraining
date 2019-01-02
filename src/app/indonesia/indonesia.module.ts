import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';


import { TimNasionalComponent } from './tim-nasional/tim-nasional.component';
import { LigaIndonesiaComponent } from './liga-indonesia/liga-indonesia.component';

const routingIndonesia : Route[] = [
  {path: 'indonesia/timnas', component: TimNasionalComponent},
  {path: 'indonesia/liga', component: LigaIndonesiaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingIndonesia)
  ],
  declarations: [TimNasionalComponent, LigaIndonesiaComponent]
})
export class IndonesiaModule { }
