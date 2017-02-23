import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-changepw',
    templateUrl: './changepw.component.html',
    styleUrls: ['./changepw.component.css'],
    providers: [DataService]
})
export class ChangepwComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    }

    public changePassword() {

        let currentPassword = (<HTMLInputElement>document.getElementById('currentPassword')).value;
        let newPW1 = (<HTMLInputElement>document.getElementById('match')).value;
        let newPW2 = (<HTMLInputElement>document.getElementById('match2')).value;

        if (currentPassword.length == 0 || newPW1.length == 0 || newPW2.length == 0) {
            alert("Bitte alle Felder ausfüllen!");
        } else {
            if (newPW1.length < 7) {
                alert("Password ist zu kurz!");
            } else if (newPW1 !== newPW2) {
                alert("Die Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut!");
            } else if (currentPassword === newPW1) {
                alert("Das neue Password darf nicht mit dem alten übereinstimmen!")
            } else {
                // Alles in Ordnung, Passwort änden!

                let body = {
                    "newpassword": newPW1,
                    "password": currentPassword
                };

                this.dataService.putData(body).subscribe(
                    (data) => {
                        console.log(data);
                        alert(data["message"]);
                    },
                    (error) => console.log("Passwort ändern fehlgeschlagen")
                );

            }
        }


    }

}
