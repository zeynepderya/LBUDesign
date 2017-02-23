import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [DataService]
})
export class NavbarComponent implements OnInit {

    // Student
    private student;
    private school;
    private studyGroups;
    private chapters;
    private educationplan;

    constructor(private router: Router, private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getData("student").subscribe(
            (data) => {
                this.student = data;
                this.school = data["school"];
                this.studyGroups = data["studyGroups"];
            },
            (error) => console.log("Information über Student konnte nicht geladen werden")
        );


        this.dataService.getData("chapter").subscribe(
            (data) => {
                this.chapters = data;
                console.log(data);
            },
            (error) => console.log("Kapiteln konnten nicht heruntergeladen werden")
        );

        this.dataService.getChapterIllustration(1).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => console.log("Kapiteln konnten nicht heruntergeladen werden")
        );

        this.dataService.getData("educationalPlan").subscribe(
            (data) => {
                this.educationplan = data;
                console.log(data);
            },
            (error) => console.log("Kapiteln konnten nicht heruntergeladen werden")
        );

    }

    public logout() {
        sessionStorage.removeItem("loginToken");
    }


}
