import { SelectTime } from "../../components/elements/SelectTime";
export default {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime
};
export var Default = {
    args: {
        onChange: function () { return console.log("Time changed"); },
        value: "11:00",
        inputFormat: "hh:mm",
        placeholder: 'Select Time'
    }
};
