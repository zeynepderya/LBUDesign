var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { LoginComponent } from './login/login.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ChangePictureComponent } from './change-picture/change-picture.component';
import { FoerderplanComponent } from './foerderplan/foerderplan.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                    { path: 'login', component: LoginComponent },
                    { path: 'delete-account', component: DeleteAccountComponent },
                    { path: 'change-picture', component: ChangePictureComponent },
                    { path: 'foerderplan', component: FoerderplanComponent },
                    { path: 'foerderplan/:educationalId', component: FoerderplanComponent },
                    { path: 'changepw', component: ChangepwComponent },
                    { path: 'welcome/:chapterId', component: WelcomeComponent },
                    { path: '', redirectTo: 'welcome/0', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome/0', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/app.module.js.map