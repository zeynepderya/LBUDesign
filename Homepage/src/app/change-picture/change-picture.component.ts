import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-picture',
    templateUrl: './change-picture.component.html',
    styleUrls: ['./change-picture.component.css'],
    providers: [DataService]
})
export class ChangePictureComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) {
    }

    private avatarPictures;
    private pictureCurrentUrl = "/images/student/superhero-batman-active.png";
    private pictureCurrentID = 1;

    ngOnInit() {
        this.dataService.getData("avatar").subscribe(
            (data) => {
                this.avatarPictures = data;
            },
            (error) => console.log("Avatare konnten nicht abgerufen werden")
        );
    }

    public changePictureCurrent(avatar, id) {
        this.pictureCurrentUrl = avatar;
        this.pictureCurrentID = id;
    }

    public saveAvatar() {
        this.dataService.putDataWithParameter("avatar/" + this.pictureCurrentID, null).subscribe(
            (data) => {
                alert(data["message"]);
            }, (error) => console.log("Avatar konnte nicht gespeichert werden")
        );
    }

    public cancel() {
        this.router.navigate(["welcome/0"]);
    }

}
