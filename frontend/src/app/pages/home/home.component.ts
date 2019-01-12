import {Component, OnInit} from '@angular/core';
import {TMBService} from "./iris.service";
import {
    MutationProfile,
    ProbabilityPrediction,
    SVCParameters,
    SVCResult
} from "./types";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public svcParameters: SVCParameters = new SVCParameters();
    public svcResult: SVCResult;
    public mp: MutationProfile = new MutationProfile();
    public probabilityPredictions: ProbabilityPrediction[];

    // graph styling
    public colorScheme = {
        domain: ['#008000', '#ff0000']
    };

    constructor(private tmbService: TMBService) {
    }

    ngOnInit() {
    }

    public trainModel() {
        this.tmbService.trainModel(this.svcParameters).subscribe((svcResult) => {
            this.svcResult = svcResult;
        });
    }

    public predictTMB() {
        this.tmbService.predictTMB(this.mp).subscribe((probabilityPredictions) => {
            this.probabilityPredictions = probabilityPredictions;
        });
    }

}
