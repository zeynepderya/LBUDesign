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
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
export var WelcomeComponent = (function () {
    function WelcomeComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['chapterId'];
        this.dataService.getChapterById(this.id).subscribe(function (data) {
            console.log(data);
            _this.color = data.strongcolor;
        });
        this.dataService.getStudentCompetence(this.id).subscribe(function (data) {
            console.log(data);
            _this.completetChapters = data;
        }, function (error) { return console.log("Kapiteln konnten nicht heruntergeladen werden"); });
    };
    WelcomeComponent.prototype.clickedBubble = function (msg) {
        console.log("clickedBubble()");
    };
    WelcomeComponent.prototype.setStyle = function () {
        return { 'background': this.color };
    };
    WelcomeComponent = __decorate([
        Component({
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, DataService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/foerderplan/welcome.component.js.map