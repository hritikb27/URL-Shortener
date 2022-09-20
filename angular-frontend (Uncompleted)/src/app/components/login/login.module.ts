import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbThemeModule } from '@nebular/theme';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbThemeModule,
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }