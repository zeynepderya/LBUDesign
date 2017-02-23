import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
    selector: 'app-delete-account',
    templateUrl: './delete-account.component.html',
    styleUrls: ['./delete-account.component.css'],
    providers: [DataService]
})
export class DeleteAccountComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
    }

    public deleteAccount() {

        let password = (<HTMLInputElement>document.getElementById('passwordField')).value;

        if (password === "M12K") {
            this.dataService.deleteAccount().subscribe(
                (data) => {
                    console.log(data["message"]);
                    alert(data["message"]);
                },
                (error) => console.log("Account konnte nicht gelöscht werden")
            );
        } else {
            alert("Passwort ist falsch");
        }
    }

}
