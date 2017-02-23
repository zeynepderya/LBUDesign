import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

    API_URL: any = "http://46.101.204.215:1337/api/V1/";

    constructor(private http: Http) {
    }

    getToken(username: string, password: string): Observable<any> {

        let body = {
            "username": username,
            "password": password
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this.API_URL + 'login', body, {headers: headers}).map(
            (response) => response.json()
        );
    }

    getStudentCompetence(id): Observable<any> {
        //studentcompetence?checked=true&chapterId=chapterId
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.get(this.API_URL + 'studentcompetence?checked=true&chapterId=' + id, {headers: headers}).map(
            (response) => response.json()
        );
    }


    getChapterById(id): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.get(this.API_URL + 'chapter/' + id, {headers: headers}).map(
            (response) => response.json()
        );
    }

    getChapterIllustration(id): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.get(this.API_URL + 'chapterillustrations/' + id, {headers: headers}).map(
            (response) => response.json()
        );
    }


    getData(data: string): Observable<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.get(this.API_URL + data, {headers: headers}).map(
            (response) => response.json()
        );
    }

    putDataWithParameter(parameter, body): Observable<Response> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.put(this.API_URL + parameter, JSON.stringify(body), {headers: headers}).map(
            (response) => response.json()
        );

    }

    putData(body): Observable<Response> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.put(this.API_URL + 'requestPasswordRecovery', JSON.stringify(body), {headers: headers}).map(
            (response) => response.json()
        );

    }

    postData(testParam: string): Observable<Response> {

        let body = {
            "username": testParam,
            "password": testParam
        };

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('https://www.reddit.com/r/pics.json', body, {headers: headers}).map(
            (response) => response.json()
        );
    }

    deleteAccount(): Observable<Response> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem("loginToken"));

        return this.http.delete(this.API_URL + 'student', {headers: headers}).map(
            (response) => response.json()
        );
    }

}
