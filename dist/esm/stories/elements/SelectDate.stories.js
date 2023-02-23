import { SelectDate } from "../../components/elements/SelectDate";
export default {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate
};
export var Default = {
    args: {
        onChange: function () { return console.log("Date changed"); },
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false
    }
};
