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
export var ChangepwComponent = (function () {
    function ChangepwComponent(dataService) {
        this.dataService = dataService;
    }
    ChangepwComponent.prototype.ngOnInit = function () {
    };
    ChangepwComponent.prototype.changePassword = function () {
        var currentPassword = document.getElementById('currentPassword').value;
        var newPW1 = document.getElementById('match').value;
        var newPW2 = document.getElementById('match2').value;
        if (currentPassword.length == 0 || newPW1.length == 0 || newPW2.length == 0) {
            alert("Bitte alle Felder ausfüllen!");
        }
        else {
            if (newPW1.length < 7) {
                alert("Password ist zu kurz!");
            }
            else if (newPW1 !== newPW2) {
                alert("Die Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut!");
            }
            else if (currentPassword === newPW1) {
                alert("Das neue Password darf nicht mit dem alten übereinstimmen!");
            }
            else {
                // Alles in Ordnung, Passwort änden!
                var body = {
                    "newpassword": newPW1,
                    "password": currentPassword
                };
                this.dataService.putData(body).subscribe(function (data) {
                    console.log(data);
                    alert(data["message"]);
                }, function (error) { return console.log("Passwort ändern fehlgeschlagen"); });
            }
        }
    };
    ChangepwComponent = __decorate([
        Component({
            selector: 'app-changepw',
            templateUrl: './changepw.component.html',
            styleUrls: ['./changepw.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [DataService])
    ], ChangepwComponent);
    return ChangepwComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/changepw/changepw.component.js.map