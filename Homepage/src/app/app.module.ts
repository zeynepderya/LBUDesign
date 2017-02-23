import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {BottombarComponent} from './bottombar/bottombar.component';
import {LoginComponent} from './login/login.component';
import {ChangepwComponent} from './changepw/changepw.component';
import {DeleteAccountComponent} from './delete-account/delete-account.component';
import {ChangePictureComponent} from './change-picture/change-picture.component';
import {FoerderplanComponent} from './foerderplan/foerderplan.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        BottombarComponent,
        LoginComponent,
        ChangepwComponent,
        DeleteAccountComponent,
        ChangePictureComponent,
        FoerderplanComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
            {path: 'delete-account', component: DeleteAccountComponent},
            {path: 'change-picture', component: ChangePictureComponent},
            {path: 'foerderplan', component: FoerderplanComponent},
            {path: 'foerderplan/:educationalId', component: FoerderplanComponent},
            {path: 'changepw', component: ChangepwComponent},
            {path: 'welcome/:chapterId', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome/0', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome/0', pathMatch: 'full'}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
