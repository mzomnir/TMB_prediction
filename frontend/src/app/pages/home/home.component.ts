import {Component, OnInit} from '@angular/core';
import {TMBService} from "./iris.service";
import {
    MutationProfile,
    ProbabilityPrediction,
    RegressionPrediction
} from "./types";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public mp: MutationProfile = new MutationProfile();
    public probabilityPredictions: ProbabilityPrediction[];
    public regressionPredictions: RegressionPrediction[];

    // graph styling
    public colorScheme = {
        domain: ['#008000', '#ff0000']
    };

    constructor(private tmbService: TMBService) {
    }

    ngOnInit() {
    }

    public predictTMB() {
        this.tmbService.predictTMB(this.mp).subscribe((probabilityPredictions) => {
            this.probabilityPredictions = probabilityPredictions;
        });
    }

    public predictMutPerMB() {
	this.tmbService.predictMutPerMB(this.mp).subscribe((regressionPredictions) => {
	    this.regressionPredictions = regressionPredictions;
	});
    }

}
