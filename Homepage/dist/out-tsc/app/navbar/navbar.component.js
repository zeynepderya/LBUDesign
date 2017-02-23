var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
export var NavbarComponent = (function () {
    function NavbarComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData("student").subscribe(function (data) {
            _this.student = data;
            _this.school = data["school"];
            _this.studyGroups = data["studyGroups"];
        }, function (error) { return console.log("Information über Student konnte nicht geladen werden"); });
        this.dataService.getData("chapter").subscribe(function (data) {
            _this.chapters = data;
            console.log(data);
        }, function (error) { return console.log("Kapiteln konnten nicht heruntergeladen werden"); });
        this.dataService.getChapterIllustration(1).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log("Kapiteln konnten nicht heruntergeladen werden"); });
        this.dataService.getData("educationalPlan").subscribe(function (data) {
            _this.educationplan = data;
            console.log(data);
        }, function (error) { return console.log("Kapiteln konnten nicht heruntergeladen werden"); });
    };
    NavbarComponent.prototype.logout = function () {
        sessionStorage.removeItem("loginToken");
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [Router, DataService])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/navbar/navbar.component.js.map