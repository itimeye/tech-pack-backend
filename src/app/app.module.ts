import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { OverviewTopComponent } from './components/overview-top/overview-top.component';
import { OverviewBodyComponent } from './components/overview-body/overview-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MeasurementDialogComponent } from './components/measurement-dialog/measurement-dialog.component';
import { HttpClientModule } from "@angular/common/http";
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    OverviewTopComponent,
    OverviewBodyComponent,
    MeasurementDialogComponent,
    OverviewPageComponent,
  ],
  entryComponents: [MeasurementDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
