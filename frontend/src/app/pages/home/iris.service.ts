import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {
    MutationProfile,
    ProbabilityPrediction,
    RegressionPrediction
} from "./types";

const SERVER_URL: string = 'api/';

@Injectable()
export class TMBService {

    constructor(private http: Http) {
    }

    public predictTMB(mp: MutationProfile): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predict`, mp).map((res) => res.json());
    }

    public predictMutPerMB(mp: MutationProfile): Observable<RegressionPrediction[]> {
	return this.http.post(`${SERVER_URL}predict_regression`, mp).map((res) => res.json());
    }

}

