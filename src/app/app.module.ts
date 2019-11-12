import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { MainLayoutComponet } from './layout/main-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    MainLayoutComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [MainLayoutComponet]
})
export class AppModule { }
