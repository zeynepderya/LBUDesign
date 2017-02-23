import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-foerderplan',
    templateUrl: './foerderplan.component.html',
    styleUrls: ['./foerderplan.component.css'],
    providers: [DataService]
})
export class FoerderplanComponent implements OnInit {

    private id;
    private foerderplaene;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['educationalId'];

        this.dataService.getData("educationalPlan/" + this.id).subscribe(
            (data) => {
                this.foerderplaene = data[0]["competences"];
            },
            (error) => console.log("Error")
        );
    }


}
