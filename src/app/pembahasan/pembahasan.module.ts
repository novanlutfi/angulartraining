import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { TaktikComponent } from './taktik/taktik.component';
import { PrediksiComponent } from './prediksi/prediksi.component';
import { SejarahComponent } from './sejarah/sejarah.component';

const routingPembahasan : Route[] = [
  {path: 'pembahasan/prediksi', component: PrediksiComponent},
  {path: 'pembahasan/sejarah', component: SejarahComponent},
  {path: 'pembahasan/taktik', component: TaktikComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingPembahasan)
  ],
  declarations: [TaktikComponent, PrediksiComponent, SejarahComponent]
})
export class PembahasanModule { }
