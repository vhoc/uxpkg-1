import { ResourceAccountRiskMeter } from "../../../components/elements/Dashboard/ResourceAccountRiskMeter";
export default {
    title: 'dashboard/TopAccountsRiskCard/ResourceAccountRiskMeter',
    component: ResourceAccountRiskMeter
};
export var Default = {
    args: {
        title: 'AWS 12312310291',
        accountProvider: 'aws',
        compliantUserPercentage: 69,
        lowRiskUserPercentage: 10,
        mediumRiskUserPercentage: 10,
        highRiskUserPercentage: 8,
        criticalRiskUserPercentage: 3
    }
};
