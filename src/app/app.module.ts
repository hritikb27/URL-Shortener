import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
