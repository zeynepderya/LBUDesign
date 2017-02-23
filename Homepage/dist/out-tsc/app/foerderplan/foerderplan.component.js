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
export var FoerderplanComponent = (function () {
    function FoerderplanComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    FoerderplanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['educationalId'];
        this.dataService.getData("educationalPlan/" + this.id).subscribe(function (data) {
            _this.foerderplaene = data[0]["competences"];
        }, function (error) { return console.log("Error"); });
    };
    FoerderplanComponent = __decorate([
        Component({
            selector: 'app-foerderplan',
            templateUrl: './foerderplan.component.html',
            styleUrls: ['./foerderplan.component.css'],
            providers: [DataService]
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, DataService])
    ], FoerderplanComponent);
    return FoerderplanComponent;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/foerderplan/foerderplan.component.js.map