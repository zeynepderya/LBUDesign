import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [DataService]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private dataService: DataService, private router: Router) {
        this.loginForm = new FormGroup({
            username: new FormControl('BENUTZERNAME', [Validators.required]),
            password: new FormControl('PASSWORD', [Validators.required])
        });
    }

    ngOnInit() {
    }

    login(userData) {
        console.log(userData);
        this.dataService.getToken(userData.username, userData.password).subscribe(
            (data) => {
                sessionStorage.setItem("loginToken", data.token);
                this.router.navigate(["welcome/0"]);
            },
            (error) => alert("Fehler")
        );

    }

}
