import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbInputModule,
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }