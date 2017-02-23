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
export var DeleteAccountComponent = (function () {
    function DeleteAccountComponent(dataService) {
        this.dataService = dataService;
    }
    DeleteAccountComponent.prototype.ngOnInit = function () {
    };
    DeleteAccountComponent.prototype.deleteAccount = function () {
        var password = document.getElementById('passwordField').value;
        if (password === "M12K") {
            this.dataService.deleteAccount().subscribe(function (data) {
                console.log(data["message"]);
                alert(data["message"]);
            }, function (error) { return console.log("Account konnte nicht gelöscht werden"); });
        }
        else {
            alert("Passwort ist falsch");
        }
    };
    DeleteAccountComponent = __decorate([
        Component({
            selector: 'app-delete-account',
            templateUrl: './delete-account.component.html',
            styleUrls: ['./delete-account.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [DataService])
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/delete-account/delete-account.component.js.map