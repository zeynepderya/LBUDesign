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
import { Router } from '@angular/router';
export var ChangePictureComponent = (function () {
    function ChangePictureComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.pictureCurrentUrl = "/images/student/superhero-batman-active.png";
        this.pictureCurrentID = 1;
    }
    ChangePictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData("avatar").subscribe(function (data) {
            _this.avatarPictures = data;
        }, function (error) { return console.log("Avatare konnten nicht abgerufen werden"); });
    };
    ChangePictureComponent.prototype.changePictureCurrent = function (avatar, id) {
        this.pictureCurrentUrl = avatar;
        this.pictureCurrentID = id;
    };
    ChangePictureComponent.prototype.saveAvatar = function () {
        this.dataService.putDataWithParameter("avatar/" + this.pictureCurrentID, null).subscribe(function (data) {
            alert(data["message"]);
        }, function (error) { return console.log("Avatar konnte nicht gespeichert werden"); });
    };
    ChangePictureComponent.prototype.cancel = function () {
        this.router.navigate(["welcome/0"]);
    };
    ChangePictureComponent = __decorate([
        Component({
            selector: 'app-change-picture',
            templateUrl: './change-picture.component.html',
            styleUrls: ['./change-picture.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [DataService, Router])
    ], ChangePictureComponent);
    return ChangePictureComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/change-picture/change-picture.component.js.map