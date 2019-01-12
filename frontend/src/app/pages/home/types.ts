export class MutationProfile {
    nmut_TTN: number = 0;
    nmut_LRP1B: number = 0;
    nmut_CSMD3: number = 0;
    nmut_PAPPA2: number = 0;
    nmut_TP53: number = 0;
    nmut_EGFR: number = 0;
    nmut_KRAS: number = 0;
    nmut_EGFR_exons18to21: number = 0;
    nmut_KRAS_hotspots: number = 0;
}

export class ProbabilityPrediction {
    name: string;
    value: number;
}

export class SVCParameters {
    C: number = 2.0;
}

export class SVCResult {
    accuracy: number;
}

export class CountPrediction {
    count: number;
}
