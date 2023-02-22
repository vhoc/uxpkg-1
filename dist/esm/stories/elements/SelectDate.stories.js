import { SelectDate } from "../../components/elements/SelectDate";
export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
};
var date = new Date();
export var Default = {
    args: {
        onChange: function () { return console.log("Date changed"); },
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false
    }
};
export var Open = {
    args: {
        onChange: function () { return date; },
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
