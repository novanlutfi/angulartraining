import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BsDropdownModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import {EropaModule} from './eropa/eropa.module';
import {IndonesiaModule} from './indonesia/indonesia.module';
import {PembahasanModule} from './pembahasan/pembahasan.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuAtasComponent } from './menu-atas/menu-atas.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { TombolSampingComponent } from './tombol-samping/tombol-samping.component';
import { JadwalSkorComponent } from './jadwal-skor/jadwal-skor.component';
import { TentangSayaComponent } from './tentang-saya/tentang-saya.component';

const routingAplikasi : Routes=[
  
  {path : 'tentang-saya', component : TentangSayaComponent},
  {path : 'jadwal-skor', component : JadwalSkorComponent},
  {path : 'eropa', redirectTo: '/eropa', pathMatch: 'full'},
  {path : 'indonesia', redirectTo: '/indonesia', pathMatch: 'full'},
  {path : 'pembahasan', redirectTo: '/pembahasan', pathMatch: 'full'},
  {path : '**', component : MainLayoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MenuAtasComponent,
    MenuSampingComponent,
    TombolSampingComponent,
    JadwalSkorComponent,
    TentangSayaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routingAplikasi),      //rout dengan parameter const
    AccordionModule.forRoot(),
    EropaModule,
    IndonesiaModule,
    PembahasanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
