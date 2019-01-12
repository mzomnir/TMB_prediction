import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {
    MutationProfile,
    ProbabilityPrediction,
    SVCParameters,
    SVCResult
} from "./types";

const SERVER_URL: string = 'api/';

@Injectable()
export class TMBService {

    constructor(private http: Http) {
    }

    public trainModel(svcParameters: SVCParameters): Observable<SVCResult> {
        return this.http.post(`${SERVER_URL}train`, svcParameters).map((res) => res.json());
    }

    public predictTMB(mp: MutationProfile): Observable<ProbabilityPrediction[]> {
        return this.http.post(`${SERVER_URL}predict`, mp).map((res) => res.json());
    }
}
