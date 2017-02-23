import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    providers: [DataService]
})
export class WelcomeComponent implements OnInit {

    id: number;
    color;
    private completetChapters;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['chapterId'];
        this.dataService.getChapterById(this.id).subscribe(
            (data) => {
                console.log(data)
                this.color = data.strongcolor
            }
        );

        this.dataService.getStudentCompetence(this.id).subscribe(
            (data) => {
                console.log(data);
                this.completetChapters = data;
            },
            (error) => console.log("Kapiteln konnten nicht heruntergeladen werden")
        );
    }

    clickedBubble(msg) {
        console.log("clickedBubble()");
    }

    setStyle() {
        return {'background': this.color}
    }

}
