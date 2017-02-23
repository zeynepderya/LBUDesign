var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
export var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.API_URL = "http://46.101.204.215:1337/api/V1/";
    }
    DataService.prototype.getToken = function (username, password) {
        var body = {
            "username": username,
            "password": password
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.API_URL + 'login', body, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.getStudentCompetence = function (id) {
        //studentcompetence?checked=true&chapterId=chapterId
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.get(this.API_URL + 'studentcompetence?checked=true&chapterId=' + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.getChapterById = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.get(this.API_URL + 'chapter/' + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.getChapterIllustration = function (id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.get(this.API_URL + 'chapterillustrations/' + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.getData = function (data) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.get(this.API_URL + data, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.putDataWithParameter = function (parameter, body) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.put(this.API_URL + parameter, JSON.stringify(body), { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.putData = function (body) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.put(this.API_URL + 'requestPasswordRecovery', JSON.stringify(body), { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.postData = function (testParam) {
        var body = {
            "username": testParam,
            "password": testParam
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://www.reddit.com/r/pics.json', body, { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteAccount = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));
        return this.http.delete(this.API_URL + 'student', { headers: headers }).map(function (response) { return response.json(); });
    };
    DataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/data.service.js.map